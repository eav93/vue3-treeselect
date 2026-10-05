/**
 * Mount benchmark in a real browser (Chrome) for 11k expanded options.
 *
 *   npm run build && npm run bench:browser
 *   BASE_REF=main npm run bench:browser       # also measure the build committed in a git ref
 *   CHROME_PATH=/path/to/chrome npm run bench:browser
 */
import { execSync } from 'child_process'
import fs from 'fs'
import http from 'http'
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import { chromium } from 'playwright-core'

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const runs = Number(process.env.RUNS || 5)
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'treeselect-bench-'))

// Builds to compare: the current dist and optionally the dist committed in BASE_REF
const builds = { current: path.join(repo, 'dist') }
if (process.env.BASE_REF) {
  const dir = path.join(work, 'base')
  fs.mkdirSync(dir)
  for (const file of ['vue3-treeselect.umd.js', 'vue3-treeselect.css']) {
    fs.writeFileSync(path.join(dir, file), execSync(`git show ${process.env.BASE_REF}:dist/${file}`, { cwd: repo }))
  }
  builds[process.env.BASE_REF] = dir
}

const files = {
  '/page.html': path.join(repo, 'bench/browser/page.html'),
  '/vue.js': path.join(repo, 'node_modules/vue/dist/vue.global.prod.js'),
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost').pathname
  const match = url.match(/^\/builds\/([^/]+)\/(.+)$/)
  const file = match ? path.join(builds[decodeURIComponent(match[1])] || '', match[2]) : files[url]
  if (!file || !fs.existsSync(file)) {
    res.statusCode = 404
    return res.end()
  }
  res.setHeader('content-type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html')
  res.end(fs.readFileSync(file))
}).listen(0)
const origin = `http://localhost:${server.address().port}`

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--no-sandbox'],
})

const scenarios = [
  ['multiple', {}],
  ['single', { multiple: false }],
  ['multiple + virtualScroll', { virtualScroll: true, optionHeight: 25 }],
]

console.log(`median of ${runs} runs`)
for (const [name, props] of scenarios) {
  for (const build of Object.keys(builds)) {
    if (props.virtualScroll && build !== 'current') continue
    const results = []
    for (let i = 0; i < runs; i++) {
      const page = await browser.newPage()
      await page.goto(`${origin}/page.html?build=${encodeURIComponent(build)}`)
      await page.evaluate(() => window.loadBuild())
      results.push(await page.evaluate(p => window.runMount(p), props))
      await page.close()
    }
    const median = key => {
      const values = results.map(r => r[key]).sort((a, b) => a - b)
      return values[Math.floor(values.length / 2)].toFixed(0).padStart(6)
    }
    console.log(
      `${name.padEnd(26)} ${build.padEnd(9)}` +
      ` first paint ${median('firstPaint')} ms | all rendered ${median('complete')} ms` +
      ` | longest task ${median('longestTask')} ms | ${results[0].options} options in DOM`
    )
  }
}

// Sanity check: keyboard navigation in a large menu (rows outside the viewport are not rendered by the browser)
const page = await browser.newPage()
await page.goto(`${origin}/page.html?build=current`)
await page.evaluate(() => window.loadBuild())
await page.evaluate(() => window.runMount({ multiple: false, alwaysOpen: false }))
await page.click('.vue-treeselect__control')
await page.keyboard.press('End')
await page.keyboard.press('ArrowUp')
const check = await page.evaluate(() => {
  const menu = document.querySelector('.vue-treeselect__menu').getBoundingClientRect()
  const option = document.querySelector('.vue-treeselect__option--highlight').getBoundingClientRect()
  return option.top >= menu.top && option.bottom <= menu.bottom
})
console.log(`keyboard navigation keeps the highlighted option visible: ${check ? 'ok' : 'FAILED'}`)

await browser.close()
server.close()
fs.rmSync(work, { recursive: true, force: true })
if (!check) process.exitCode = 1
