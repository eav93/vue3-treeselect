/**
 * Runtime performance scenarios in a real browser (Chrome).
 *
 *   npm run build && npx vite build --minify false --outDir /tmp/ts-unmin
 *   node bench/browser/perf.mjs [scenario ...]      # s1 s2 s3 s4 s5 s6 s7 s8 (default: all)
 *   BUILD=unmin node bench/browser/perf.mjs s1       # use the unminified build (readable profiles)
 *   PROFILE=1 node bench/browser/perf.mjs s1         # print CPU profile top frames
 */
import fs from 'fs'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'
import { chromium } from 'playwright-core'

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const BUILD = process.env.BUILD || 'current'
const PROFILE = !!process.env.PROFILE
const builds = { current: path.join(repo, 'dist'), unmin: process.env.UNMIN_DIR || '/tmp/ts-unmin', proto: process.env.PROTO_DIR || '/tmp/ts-proto' }
const files = {
  '/page.html': path.join(repo, 'bench/browser/perf-page.html'),
  '/vue.js': path.join(repo, 'node_modules/vue/dist/vue.global.prod.js'),
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost').pathname
  const match = url.match(/^\/builds\/([^/]+)\/(.+)$/)
  const file = match ? path.join(builds[match[1]] || '', match[2]) : files[url]
  if (!file || !fs.existsSync(file)) { res.statusCode = 404; return res.end() }
  res.setHeader('content-type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html')
  res.end(fs.readFileSync(file))
}).listen(0)
const origin = `http://localhost:${server.address().port}`
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox'] })

const f = (n, d = 1) => (typeof n === 'number' ? n.toFixed(d) : String(n))
const stats = arr => {
  const s = arr.slice().sort((a, b) => a - b)
  const sum = s.reduce((a, b) => a + b, 0)
  return { n: s.length, avg: sum / s.length, med: s[Math.floor(s.length / 2)], p95: s[Math.floor(s.length * 0.95)], max: s[s.length - 1], sum }
}
const fmtStats = (label, arr, unit = 'ms') => {
  const s = stats(arr)
  return `${label}: avg ${f(s.avg)} med ${f(s.med)} p95 ${f(s.p95)} max ${f(s.max)} ${unit} (n=${s.n})`
}

// ---- page + CDP helpers ----
async function openPage() {
  const page = await browser.newPage()
  page.on('pageerror', e => console.log('  PAGE ERROR:', e.message))
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') console.log('  console.' + m.type() + ':', m.text().slice(0, 200)) })
  await page.goto(`${origin}/page.html?build=${BUILD}`)
  await page.evaluate(() => window.loadBuild())
  if (process.env.CSS_OVERRIDE) await page.addStyleTag({ content: process.env.CSS_OVERRIDE })
  const cdp = await page.context().newCDPSession(page)
  await cdp.send('Performance.enable')
  await cdp.send('Profiler.enable')
  await cdp.send('Profiler.setSamplingInterval', { interval: 200 })
  await cdp.send('HeapProfiler.enable')
  const metrics = async () => {
    const { metrics } = await cdp.send('Performance.getMetrics')
    return Object.fromEntries(metrics.map(m => [m.name, m.value]))
  }
  const KEYS = ['ScriptDuration', 'LayoutCount', 'LayoutDuration', 'RecalcStyleCount', 'RecalcStyleDuration', 'TaskDuration', 'Nodes', 'JSEventListeners', 'JSHeapUsedSize']
  const delta = (a, b) => Object.fromEntries(KEYS.map(k => [k, b[k] - a[k]]))
  const fmtDelta = d => `script ${f(d.ScriptDuration * 1000, 0)}ms task ${f(d.TaskDuration * 1000, 0)}ms | layout ${d.LayoutCount}x ${f(d.LayoutDuration * 1000, 0)}ms | style ${d.RecalcStyleCount}x ${f(d.RecalcStyleDuration * 1000, 0)}ms | nodes ${d.Nodes >= 0 ? '+' : ''}${d.Nodes} listeners ${d.JSEventListeners >= 0 ? '+' : ''}${d.JSEventListeners}`
  const gc = () => cdp.send('HeapProfiler.collectGarbage')
  const profile = { start: () => cdp.send('Profiler.start'), stop: async (label) => { const { profile } = await cdp.send('Profiler.stop'); if (PROFILE) printProfile(profile, label) } }
  // Timeline tracing: self time per event name on the renderer main thread
  const trace = {
    start: async () => {
      trace.events = []
      cdp.on('Tracing.dataCollected', e => trace.events.push(...e.value))
      await cdp.send('Tracing.start', { categories: 'devtools.timeline,disabled-by-default-devtools.timeline,blink.user_timing', options: 'sampling-frequency=10000', transferMode: 'ReportEvents' })
    },
    stop: async (label) => {
      await new Promise(resolve => { cdp.once('Tracing.tracingComplete', resolve); cdp.send('Tracing.end') })
      const ev = trace.events.filter(e => e.ph === 'X' && typeof e.dur === 'number')
      // renderer main threads (CrRendererMain): pick the one with the most Layout/Paint/RunTask events
      const mainThreads = new Set(trace.events.filter(e => e.ph === 'M' && e.name === 'thread_name' && e.args?.name === 'CrRendererMain').map(e => e.pid + ':' + e.tid))
      const byThread = new Map()
      for (const e of ev) { const k = e.pid + ':' + e.tid; if (mainThreads.has(k)) byThread.set(k, (byThread.get(k) || 0) + 1) }
      const main = [...byThread].sort((a, b) => b[1] - a[1])[0]?.[0]
      const list = ev.filter(e => e.pid + ':' + e.tid === main).sort((a, b) => a.ts - b.ts || b.dur - a.dur)
      const self = new Map(); const stack = []
      for (const e of list) {
        while (stack.length && stack[stack.length - 1].ts + stack[stack.length - 1].dur <= e.ts) stack.pop()
        const p = stack[stack.length - 1]
        // only properly nested children are subtracted from the parent
        if (p && e.ts + e.dur <= p.ts + p.dur) { p.child = (p.child || 0) + e.dur; stack.push(e) }
        else if (!p) stack.push(e)
      }
      let total = 0
      for (const e of list) { const s = (e.dur - (e.child || 0)) / 1000; total += s; self.set(e.name, (self.get(e.name) || 0) + s) }
      const top = [...self].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k, v]) => `${k} ${f(v, 0)}ms`).join(', ')
      console.log(`    [trace ${label}] main-thread self time ${f(total, 0)}ms: ${top}`)
    },
  }
  return { page, cdp, metrics, delta, fmtDelta, gc, profile, trace, instr: () => page.evaluate(() => window.__snapshotInstr()) }
}

function printProfile(profile, label) {
  const nodes = new Map(profile.nodes.map(n => [n.id, n]))
  const parent = new Map()
  for (const n of profile.nodes) for (const c of n.children || []) parent.set(c, n.id)
  const self = new Map(), nearest = new Map()
  const isLib = url => url.includes('vue3-treeselect')
  const name = n => `${n.callFrame.functionName || '(anon)'} ${path.basename(n.callFrame.url) || ''}:${n.callFrame.lineNumber + 1}`
  let total = 0
  for (let i = 0; i < profile.samples.length; i++) {
    const dt = (profile.timeDeltas[i] || 0) / 1000
    total += dt
    const n = nodes.get(profile.samples[i])
    const k = name(n)
    self.set(k, (self.get(k) || 0) + dt)
    // nearest treeselect frame on the stack (inclusive time attribution)
    let cur = n, found = null
    while (cur) { if (isLib(cur.callFrame.url) && cur.callFrame.functionName) { found = cur; break } cur = nodes.get(parent.get(cur.id)) }
    const nk = found ? name(found) : (cur === undefined ? `(outside treeselect) ${k}` : '(outside treeselect)')
    nearest.set(nk, (nearest.get(nk) || 0) + dt)
  }
  const top = (m, n = 12) => [...m].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => `      ${f(v)}ms ${f(v / total * 100, 0)}%  ${k}`).join('\n')
  console.log(`    [profile ${label}] total sampled ${f(total)}ms\n    top self:\n${top(self)}\n    by nearest treeselect frame (inclusive):\n${top(nearest)}`)
}

const sleep = ms => new Promise(r => setTimeout(r, ms))
const mount = async (page, opts) => {
  await page.evaluate(opts => window.mountApp(opts), opts)
  await page.evaluate(() => window.waitComplete())
}

// ====================================================================
// S1: typing in the search box
// ====================================================================
async function s1(tree, props = {}) {
  const { page, metrics, delta, fmtDelta, profile, trace } = await openPage()
  console.log(`\n[S1 search typing] tree=${tree} props=${JSON.stringify(props)}`)
  await mount(page, { tree, props: { alwaysOpen: true, defaultExpandLevel: tree === '55k' ? 0 : Infinity, ...props } })
  await page.click('.vue-treeselect__control')
  await page.evaluate(() => window.waitComplete())
  const steps = [['a', 'type'], ['l', 'type'], ['p', 'type'], ['', 'clear']]
  await profile.start()
  for (const [ch, kind] of steps) {
    const m0 = await metrics()
    if (process.env.TRACE) await trace.start()
    const t0 = await page.evaluate(() => window.begin())
    if (kind === 'type') await page.keyboard.type(ch)
    else { await page.keyboard.press('Control+A'); await page.keyboard.press('Backspace') }
    const r = await page.evaluate(t0 => window.end(t0), t0)
    if (process.env.TRACE) await trace.stop(`S1 ${kind} "${ch}" until paint`)
    const c = await page.evaluate(t0 => window.waitComplete(t0), t0)
    const d = delta(m0, await metrics())
    console.log(`  ${kind} "${ch}": paint ${f(r.paint)}ms complete ${f(c.complete)}ms longest task ${f(c.longest)}ms (${r.longTasks} long) rows ${c.options} | ${fmtDelta(d)}`)
    await sleep(300) // the leading debounce call runs immediately when idle
  }
  await profile.stop(`S1 ${tree}`)
  await page.close()
}

// ====================================================================
// S2: hover across 30 rows, ArrowDown x30
// ====================================================================
async function s2(tree, props = {}) {
  const { page, metrics, delta, fmtDelta, profile, trace } = await openPage()
  console.log(`\n[S2 hover / ArrowDown] tree=${tree} props=${JSON.stringify(props)}`)
  await mount(page, { tree, props: { alwaysOpen: true, defaultExpandLevel: Infinity, ...props } })
  await page.click('.vue-treeselect__control')
  await page.evaluate(() => window.waitComplete())
  for (const [label, action] of [['mouseover', i => window.hoverRow(i)], ['ArrowDown', () => window.pressKey('ArrowDown')]]) {
    const m0 = await metrics()
    if (process.env.TRACE) await trace.start()
    await profile.start()
    const times = await page.evaluate(async (src) => {
      const action = new Function('i', 'return (' + src + ')(i)')
      const out = []
      for (let i = 0; i < 30; i++) {
        const t0 = window.begin()
        action(i)
        const r = await window.end(t0)
        out.push(r.paint)
      }
      return out
    }, action.toString())
    await profile.stop(`S2 ${label} ${tree}`)
    if (process.env.TRACE) await trace.stop(`S2 ${label} ${tree}`)
    const d = delta(m0, await metrics())
    console.log(`  ${fmtStats(label + ' time to paint', times)} | total ${fmtDelta(d)}\n    per event: ${times.map(t => f(t, 0)).join(' ')}`)
  }
  await page.close()
}

// ====================================================================
// S3: open / close 20 times
// ====================================================================
async function s3(tree, props = {}) {
  const { page, metrics, delta, fmtDelta, profile, instr } = await openPage()
  console.log(`\n[S3 open/close x20] tree=${tree} props=${JSON.stringify(props)}`)
  await mount(page, { tree, props: { defaultExpandLevel: tree === '55k' ? 0 : Infinity, ...props } })
  const i0 = await instr()
  const m0 = await metrics()
  const opens = [], opensComplete = [], closes = []
  await profile.start()
  for (let i = 0; i < 20; i++) {
    let t0 = await page.evaluate(() => { const t = window.begin(); window.vm().openMenu(); return t })
    let r = await page.evaluate(t0 => window.end(t0), t0)
    const c = await page.evaluate(t0 => window.waitComplete(t0), t0)
    opens.push(r.paint); opensComplete.push(c.complete)
    t0 = await page.evaluate(() => { const t = window.begin(); window.vm().closeMenu(); return t })
    r = await page.evaluate(t0 => window.end(t0), t0)
    closes.push(r.paint)
    if (i === 0 || i === 19) {
      const ii = await instr()
      const d = delta(m0, await metrics())
      console.log(`  after cycle ${i + 1}: ${fmtDelta(d)} | active timers ${ii.activeTimeouts}/${ii.activeIntervals} rafs ${ii.activeRafs} | win/doc listeners ${JSON.stringify(ii.listeners)} el listeners ${ii.elListeners - i0.elListeners}`)
    }
  }
  await profile.stop(`S3 ${tree}`)
  console.log(`  ${fmtStats('open -> paint', opens)}\n  ${fmtStats('open -> complete', opensComplete)}\n  ${fmtStats('close -> paint', closes)}`)
  // Cost while the menu is open and idle for 2s
  await page.evaluate(() => window.vm().openMenu())
  await page.evaluate(() => window.waitComplete())
  const ia = await instr(); const ma = await metrics()
  await sleep(2000)
  const ib = await instr(); const mb = await metrics()
  console.log(`  idle 2s with menu open: ${fmtDelta(delta(ma, mb))} | timeouts fired ${ib.timeoutsFired - ia.timeoutsFired} intervals fired ${ib.intervalsFired - ia.intervalsFired} rafs ${ib.rafFired - ia.rafFired} | listeners ${JSON.stringify(ib.listeners)} | sentinel nodes in menu: ${await page.evaluate(() => document.querySelectorAll('.vue-treeselect__menu > _').length)}`)
  await page.close()
}

// ====================================================================
// S4: select 300 options one by one (multiple, menu open)
// ====================================================================
async function s4(tree, { focused = true, open = true, props = {} } = {}) {
  const { page, metrics, delta, fmtDelta, profile, instr, trace } = await openPage()
  console.log(`\n[S4 select 300] tree=${tree} focused=${focused} menuOpen=${open} props=${JSON.stringify(props)}`)
  await mount(page, { tree, props: { alwaysOpen: open, defaultExpandLevel: Infinity, ...props } })
  if (focused && open) await page.click('.vue-treeselect__control')
  await page.evaluate(() => window.waitComplete())
  const ids = await page.evaluate(() => window.leafIdsDistinctParents(300))
  const m0 = await metrics(); const i0 = await instr()
  if (process.env.TRACE) await trace.start()
  await profile.start()
  const times = await page.evaluate(async ids => {
    const out = []
    for (const id of ids) {
      const t0 = window.begin()
      if (!window.mousedownRow(id)) window.vm().select(window.vm().getNode(id))
      const r = await window.end(t0)
      out.push(r.paint)
    }
    return out
  }, ids)
  await profile.stop(`S4 ${tree} focused=${focused} open=${open}`)
  if (process.env.TRACE) await trace.stop(`S4 ${tree} focused=${focused} open=${open}`)
  const d = delta(m0, await metrics()); const i1 = await instr()
  const tags = await page.evaluate(() => document.querySelectorAll('.vue-treeselect__multi-value-item').length)
  const tg = await page.evaluate(() => !!document.querySelector('.vue-treeselect__multi-value-item--transition-enter-active, .vue-treeselect__multi-value-item--transition-leave-active'))
  console.log(`  ${fmtStats('select -> paint', times)}\n  first 50: avg ${f(stats(times.slice(0, 50)).avg)}ms | 50-150: avg ${f(stats(times.slice(50, 150)).avg)}ms | last 100: avg ${f(stats(times.slice(200)).avg)}ms\n  total ${fmtDelta(d)} | tags ${tags} | v-model updates ${i1.updates - i0.updates} | transition active now ${tg}`)
  await page.close()
}

// ====================================================================
// S5: parent updates modelValue x100, replaces options x10
// ====================================================================
async function s5(tree) {
  for (const optionsMode of ['markRaw', 'plain', 'reactive']) {
    const { page, metrics, delta, fmtDelta, profile } = await openPage()
    console.log(`\n[S5 v-model / options replace] tree=${tree} optionsMode=${optionsMode}`)
    const t0 = Date.now()
    await page.evaluate(opts => window.mountApp(opts), { tree, optionsMode, props: { defaultExpandLevel: 0 } })
    console.log(`  mount (menu closed): ${Date.now() - t0}ms`)
    const ids = await page.evaluate(() => window.leafIdsDistinctParents(100))
    // 100 growing values (menu closed, tags shown)
    let m0 = await metrics()
    await profile.start()
    let times = await page.evaluate(async ids => {
      const out = []
      for (let i = 0; i < 100; i++) {
        const t0 = window.begin()
        window.__state.value = ids.slice(0, i + 1)
        out.push((await window.end(t0)).paint)
      }
      return out
    }, ids)
    await profile.stop(`S5 modelValue growing ${optionsMode}`)
    console.log(`  ${fmtStats('modelValue += 1 id -> paint', times)} | ${fmtDelta(delta(m0, await metrics()))}`)
    // 100 no-op values (new array, same content)
    m0 = await metrics()
    times = await page.evaluate(async () => {
      const out = []
      for (let i = 0; i < 100; i++) {
        const t0 = window.begin()
        window.__state.value = window.__state.value.slice()
        out.push((await window.end(t0)).paint)
      }
      return out
    })
    console.log(`  ${fmtStats('modelValue same content -> paint', times)} | ${fmtDelta(delta(m0, await metrics()))}`)
    // same with the menu open
    await page.evaluate(() => window.vm().openMenu())
    await page.evaluate(() => window.waitComplete())
    m0 = await metrics()
    times = await page.evaluate(async ids => {
      const out = []
      for (let i = 0; i < 100; i++) {
        const t0 = window.begin()
        window.__state.value = ids.slice(0, 100 - i)
        out.push((await window.end(t0)).paint)
      }
      return out
    }, ids)
    console.log(`  ${fmtStats('modelValue -= 1 id (menu open) -> paint', times)} | ${fmtDelta(delta(m0, await metrics()))}`)
    await page.evaluate(() => { window.__state.value = []; window.vm().closeMenu() })
    // replace options x10 (menu closed), then x3 with menu open
    for (const open of [false, true]) {
      if (open) { await page.evaluate(() => window.vm().openMenu()); await page.evaluate(() => window.waitComplete()) }
      m0 = await metrics()
      await profile.start()
      const n = open ? 3 : 10
      times = await page.evaluate(async (n) => {
        const out = []
        for (let i = 0; i < n; i++) {
          const t0 = window.begin()
          window.__state.options = window.__wrap(window.__gen())
          const r = await window.end(t0)
          const c = await window.waitComplete(t0)
          out.push([r.paint, c.complete, c.longest])
        }
        return out
      }, n)
      await profile.stop(`S5 options replace ${optionsMode} open=${open}`)
      console.log(`  options replace x${n} (menu ${open ? 'open' : 'closed'}): ${fmtStats('paint', times.map(t => t[0]))}; ${fmtStats('complete', times.map(t => t[1]))}; longest task max ${f(Math.max(...times.map(t => t[2])))}ms | ${fmtDelta(delta(m0, await metrics()))}`)
    }
    await page.close()
  }
}

// ====================================================================
// S6: scrolling the open menu
// ====================================================================
async function s6(tree, props = {}) {
  const { page, metrics, delta, fmtDelta, profile, trace } = await openPage()
  console.log(`\n[S6 scroll] tree=${tree} props=${JSON.stringify(props)}`)
  await mount(page, { tree, props: { alwaysOpen: true, defaultExpandLevel: Infinity, ...props } })
  await page.evaluate(() => window.waitComplete())
  console.log(`  DOM composition of first 20 rows: ${JSON.stringify(await page.evaluate(() => window.rowComposition(20)))}`)
  for (const step of [300, 3000]) {
    const m0 = await metrics()
    if (process.env.TRACE) await trace.start()
    await profile.start()
    const frames = await page.evaluate(async step => {
      const menu = document.querySelector('.vue-treeselect__menu')
      menu.scrollTop = 0
      await new Promise(r => requestAnimationFrame(r))
      const deltas = []
      let last = performance.now()
      for (let i = 0; i < 60; i++) {
        menu.scrollTop += (i < 30 ? step : -step)
        await new Promise(r => requestAnimationFrame(r))
        const now = performance.now(); deltas.push(now - last); last = now
      }
      return deltas
    }, step)
    await profile.stop(`S6 scroll step=${step} ${tree}`)
    if (process.env.TRACE) await trace.stop(`S6 scroll step=${step} ${tree}`)
    console.log(`  ${fmtStats(`frame time (scroll ${step}px/frame)`, frames)} | ${fmtDelta(delta(m0, await metrics()))}`)
  }
  // real wheel events
  const m0 = await metrics()
  const box = await page.locator('.vue-treeselect__menu').boundingBox()
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.evaluate(() => { window.__fr = []; let l = performance.now(); const loop = () => { const n = performance.now(); window.__fr.push(n - l); l = n; if (window.__fr.length < 400) requestAnimationFrame(loop) }; requestAnimationFrame(loop) })
  for (let i = 0; i < 20; i++) { await page.mouse.wheel(0, 500); await sleep(50) }
  await sleep(500)
  const fr = await page.evaluate(() => window.__fr.filter(x => x > 1))
  console.log(`  ${fmtStats('frame time (mouse wheel x20)', fr)} | ${fmtDelta(delta(m0, await metrics()))}`)
  await page.close()
}

// ====================================================================
// S7: memory: mount + open + unmount x20
// ====================================================================
async function s7(tree, props = {}) {
  const { page, cdp, metrics, gc, instr } = await openPage()
  const cycles = Number(process.env.CYCLES || 20)
  console.log(`\n[S7 memory mount/open/unmount x${cycles}] tree=${tree}`)
  // histogram of heap objects by type:name (count, self size)
  const heapHistogram = async () => {
    const chunks = []
    const onChunk = e => chunks.push(e.chunk)
    cdp.on('HeapProfiler.addHeapSnapshotChunk', onChunk)
    await cdp.send('HeapProfiler.takeHeapSnapshot', { reportProgress: false })
    cdp.off('HeapProfiler.addHeapSnapshotChunk', onChunk)
    const snap = JSON.parse(chunks.join(''))
    const nfields = snap.snapshot.meta.node_fields, nf = nfields.length
    const ti = nfields.indexOf('type'), ni = nfields.indexOf('name'), si = nfields.indexOf('self_size')
    const types = snap.snapshot.meta.node_types[0]
    const hist = new Map()
    for (let i = 0; i < snap.nodes.length; i += nf) {
      const key = types[snap.nodes[i + ti]] + ':' + snap.strings[snap.nodes[i + ni]].slice(0, 40)
      const h = hist.get(key) || { count: 0, size: 0 }; h.count++; h.size += snap.nodes[i + si]; hist.set(key, h)
    }
    return hist
  }
  const snap = async (label) => {
    await gc(); await sleep(100); await gc()
    const m = await metrics(); const i = await instr()
    console.log(`  ${label}: heap ${f(m.JSHeapUsedSize / 1048576)}MB nodes ${m.Nodes} listeners ${m.JSEventListeners} | win/doc listeners ${JSON.stringify(i.listeners)} el listeners ${i.elListeners} | timers ${i.activeTimeouts}/${i.activeIntervals} rafs ${i.activeRafs} observers ${JSON.stringify(i.observers)}`)
    return m
  }
  await snap('before')
  let h1 = null
  for (let i = 0; i < cycles; i++) {
    await mount(page, { tree, props: { defaultExpandLevel: Infinity, ...props } })
    await page.evaluate(() => window.vm().openMenu())
    await page.evaluate(() => window.waitComplete())
    await page.evaluate(() => window.unmountApp())
    if (i === 0) { await snap('after 1 cycle'); h1 = await heapHistogram() }
    if (i === 9) await snap('after 10 cycles')
    if (i === 19 && cycles > 20) await snap('after 20 cycles')
  }
  await snap(`after ${cycles} cycles`)
  const h2 = await heapHistogram()
  const growth = [...h2].map(([k, v]) => [k, v.count - (h1.get(k)?.count || 0), v.size - (h1.get(k)?.size || 0)]).filter(x => x[1] > 0 || x[2] > 0)
  console.log(`  heap object growth after 1 -> ${cycles} cycles (top by count): ` + growth.sort((a, b) => b[1] - a[1]).slice(0, 12).map(x => `${x[0]} +${x[1]} (${f(x[2] / 1024, 0)}KB)`).join('; '))
  console.log(`  heap object growth (top by size): ` + growth.sort((a, b) => b[2] - a[2]).slice(0, 8).map(x => `${x[0]} +${f(x[2] / 1024, 0)}KB (+${x[1]})`).join('; '))
  await page.close()
}

// ====================================================================
// S8: idle with the menu closed
// ====================================================================
async function s8(tree) {
  const { page, metrics, delta, fmtDelta, instr } = await openPage()
  console.log(`\n[S8 idle, menu closed] tree=${tree}`)
  await mount(page, { tree, props: { defaultExpandLevel: Infinity } })
  await sleep(300)
  const ia = await instr(); const ma = await metrics()
  await sleep(3000)
  const ib = await instr(); const mb = await metrics()
  console.log(`  3s idle: ${fmtDelta(delta(ma, mb))} | timeouts fired ${ib.timeoutsFired - ia.timeoutsFired} intervals fired ${ib.intervalsFired - ia.intervalsFired} rafs ${ib.rafFired - ia.rafFired} | active timers ${ib.activeTimeouts}/${ib.activeIntervals} | listeners ${JSON.stringify(ib.listeners)} | observers ${JSON.stringify(ib.observers)}`)
  await page.close()
}

// ====================================================================
// S9: progressive rendering scaling (open a fully expanded menu)
// ====================================================================
async function s9(tree, props = {}) {
  const { page, metrics, delta, fmtDelta, profile, instr, trace } = await openPage()
  console.log(`\n[S9 progressive fill] tree=${tree} props=${JSON.stringify(props)}`)
  await page.evaluate(opts => window.mountApp(opts), { tree, props: { defaultExpandLevel: Infinity, ...props } })
  const i0 = await instr(); const m0 = await metrics()
  await profile.start()
  if (process.env.TRACE) await trace.start()
  const p = await page.evaluate(async () => {
    window.__t0 = window.begin()
    window.vm().openMenu()
    return window.end(window.__t0)
  })
  await profile.stop(`S9 open->paint ${tree}`)
  if (process.env.TRACE) await trace.stop(`S9 open->paint ${tree}`)
  const m1 = await metrics()
  console.log(`  open -> paint ${f(p.paint)}ms (longest task ${f(p.longest)}ms) | ${fmtDelta(delta(m0, m1))}`)
  await profile.start()
  const r = await page.evaluate(() => window.waitComplete(window.__t0, 120000))
  await profile.stop(`S9 fill ${tree}`)
  const i1 = await instr()
  console.log(`  open -> complete ${f(r.complete)}ms, rows ${r.options}, longest task ${f(r.longest)}ms, fill steps (timeouts) ${i1.timeoutsFired - i0.timeoutsFired} | ${fmtDelta(delta(m1, await metrics()))}`)
  await page.close()
}

const wanted = process.argv.slice(2)
const trees = process.env.TREES ? process.env.TREES.split(',') : null
const T = (...list) => list.filter(t => !trees || trees.includes(t))
const run = (name, fn) => (!wanted.length || wanted.includes(name)) ? fn() : Promise.resolve()
console.log(`build=${BUILD} chrome=${browser.version()} css_override=${process.env.CSS_OVERRIDE || '-'}`)
await run('s1', async () => { for (const t of T('11k', 'flat5k', '55k')) await s1(t) })
await run('s2', async () => { for (const t of T('11k', 'flat5k')) await s2(t) })
await run('s3', async () => { for (const t of T('11k', '55k', 'flat5k')) await s3(t) })
await run('s4', async () => { for (const t of T('11k')) { await s4(t, { focused: true }); await s4(t, { focused: true, open: false }) } for (const t of T('flat5k')) await s4(t, { focused: true }) })
await run('s5', async () => { for (const t of T('11k')) await s5(t) })
await run('s6', async () => { for (const t of T('11k', 'flat5k')) await s6(t) })
await run('s7', async () => { for (const t of T('11k')) await s7(t) })
await run('s8', async () => { for (const t of T('11k')) await s8(t) })
await run('s9', async () => { for (const t of T('11k', '55k')) await s9(t) })
await browser.close()
server.close()
