import type { InjectionKey } from 'vue'

/**
 * All texts shown by the component. Each one can also be set with the prop of the same name,
 * which takes precedence over the locale.
 */
export interface TreeselectTexts {
  placeholder: string
  noResultsText: string
  noOptionsText: string
  noChildrenText: string
  loadingText: string
  searchPromptText: string
  retryText: string
  retryTitle: string
  clearAllText: string
  clearValueText: string
  limitText: (count: number) => string
}

/**
 * A locale: a language code of a built-in locale or (partial) texts
 */
export type TreeselectLocale = string | Partial<TreeselectTexts>

export const en: TreeselectTexts = {
  placeholder: 'Select...',
  noResultsText: 'No results found...',
  noOptionsText: 'No options available.',
  noChildrenText: 'No sub-options.',
  loadingText: 'Loading...',
  searchPromptText: 'Type to search...',
  retryText: 'Retry?',
  retryTitle: 'Click to retry',
  clearAllText: 'Clear all',
  clearValueText: 'Clear value',
  limitText: count => `and ${count} more`,
}

export const ru: TreeselectTexts = {
  placeholder: 'Выберите...',
  noResultsText: 'Ничего не найдено',
  noOptionsText: 'Нет вариантов',
  noChildrenText: 'Нет вложенных вариантов',
  loadingText: 'Загрузка...',
  searchPromptText: 'Введите текст для поиска',
  retryText: 'Повторить?',
  retryTitle: 'Нажмите, чтобы повторить',
  clearAllText: 'Очистить всё',
  clearValueText: 'Очистить',
  limitText: count => `и ещё ${count}`,
}

export const uk: TreeselectTexts = {
  placeholder: 'Оберіть...',
  noResultsText: 'Нічого не знайдено',
  noOptionsText: 'Немає варіантів',
  noChildrenText: 'Немає вкладених варіантів',
  loadingText: 'Завантаження...',
  searchPromptText: 'Введіть текст для пошуку',
  retryText: 'Повторити?',
  retryTitle: 'Натисніть, щоб повторити',
  clearAllText: 'Очистити все',
  clearValueText: 'Очистити',
  limitText: count => `і ще ${count}`,
}

export const de: TreeselectTexts = {
  placeholder: 'Auswählen...',
  noResultsText: 'Keine Ergebnisse gefunden',
  noOptionsText: 'Keine Optionen verfügbar.',
  noChildrenText: 'Keine Unteroptionen.',
  loadingText: 'Wird geladen...',
  searchPromptText: 'Zum Suchen tippen...',
  retryText: 'Erneut versuchen?',
  retryTitle: 'Klicken, um es erneut zu versuchen',
  clearAllText: 'Alle löschen',
  clearValueText: 'Wert löschen',
  limitText: count => `und ${count} weitere`,
}

export const fr: TreeselectTexts = {
  placeholder: 'Sélectionner...',
  noResultsText: 'Aucun résultat',
  noOptionsText: 'Aucune option disponible.',
  noChildrenText: 'Aucune sous-option.',
  loadingText: 'Chargement...',
  searchPromptText: 'Tapez pour rechercher...',
  retryText: 'Réessayer ?',
  retryTitle: 'Cliquez pour réessayer',
  clearAllText: 'Tout effacer',
  clearValueText: 'Effacer la valeur',
  limitText: count => `et ${count} de plus`,
}

export const es: TreeselectTexts = {
  placeholder: 'Seleccionar...',
  noResultsText: 'No se encontraron resultados',
  noOptionsText: 'No hay opciones disponibles.',
  noChildrenText: 'Sin subopciones.',
  loadingText: 'Cargando...',
  searchPromptText: 'Escriba para buscar...',
  retryText: '¿Reintentar?',
  retryTitle: 'Haga clic para reintentar',
  clearAllText: 'Borrar todo',
  clearValueText: 'Borrar valor',
  limitText: count => `y ${count} más`,
}

export const it: TreeselectTexts = {
  placeholder: 'Seleziona...',
  noResultsText: 'Nessun risultato trovato',
  noOptionsText: 'Nessuna opzione disponibile.',
  noChildrenText: 'Nessuna sotto-opzione.',
  loadingText: 'Caricamento...',
  searchPromptText: 'Digita per cercare...',
  retryText: 'Riprovare?',
  retryTitle: 'Clicca per riprovare',
  clearAllText: 'Cancella tutto',
  clearValueText: 'Cancella valore',
  limitText: count => `e altri ${count}`,
}

export const pt: TreeselectTexts = {
  placeholder: 'Selecionar...',
  noResultsText: 'Nenhum resultado encontrado',
  noOptionsText: 'Nenhuma opção disponível.',
  noChildrenText: 'Sem subopções.',
  loadingText: 'Carregando...',
  searchPromptText: 'Digite para pesquisar...',
  retryText: 'Tentar novamente?',
  retryTitle: 'Clique para tentar novamente',
  clearAllText: 'Limpar tudo',
  clearValueText: 'Limpar valor',
  limitText: count => `e mais ${count}`,
}

export const pl: TreeselectTexts = {
  placeholder: 'Wybierz...',
  noResultsText: 'Brak wyników',
  noOptionsText: 'Brak dostępnych opcji.',
  noChildrenText: 'Brak podopcji.',
  loadingText: 'Ładowanie...',
  searchPromptText: 'Wpisz, aby wyszukać...',
  retryText: 'Spróbować ponownie?',
  retryTitle: 'Kliknij, aby spróbować ponownie',
  clearAllText: 'Wyczyść wszystko',
  clearValueText: 'Wyczyść wartość',
  limitText: count => `i jeszcze ${count}`,
}

export const tr: TreeselectTexts = {
  placeholder: 'Seçin...',
  noResultsText: 'Sonuç bulunamadı',
  noOptionsText: 'Seçenek yok.',
  noChildrenText: 'Alt seçenek yok.',
  loadingText: 'Yükleniyor...',
  searchPromptText: 'Aramak için yazın...',
  retryText: 'Tekrar denensin mi?',
  retryTitle: 'Tekrar denemek için tıklayın',
  clearAllText: 'Tümünü temizle',
  clearValueText: 'Değeri temizle',
  limitText: count => `ve ${count} tane daha`,
}

export const zh: TreeselectTexts = {
  placeholder: '请选择...',
  noResultsText: '未找到结果',
  noOptionsText: '没有可用选项。',
  noChildrenText: '没有子选项。',
  loadingText: '加载中...',
  searchPromptText: '输入以搜索...',
  retryText: '重试？',
  retryTitle: '点击重试',
  clearAllText: '清除全部',
  clearValueText: '清除',
  limitText: count => `及其他 ${count} 项`,
}

export const ja: TreeselectTexts = {
  placeholder: '選択してください...',
  noResultsText: '結果が見つかりません',
  noOptionsText: '選択肢がありません。',
  noChildrenText: 'サブ項目がありません。',
  loadingText: '読み込み中...',
  searchPromptText: '入力して検索...',
  retryText: '再試行しますか？',
  retryTitle: 'クリックして再試行',
  clearAllText: 'すべてクリア',
  clearValueText: 'クリア',
  limitText: count => `他 ${count} 件`,
}


export const ar: TreeselectTexts = {
  placeholder: 'اختر...',
  noResultsText: 'لم يتم العثور على نتائج',
  noOptionsText: 'لا توجد خيارات متاحة.',
  noChildrenText: 'لا توجد خيارات فرعية.',
  loadingText: 'جارٍ التحميل...',
  searchPromptText: 'اكتب للبحث...',
  retryText: 'إعادة المحاولة؟',
  retryTitle: 'انقر لإعادة المحاولة',
  clearAllText: 'مسح الكل',
  clearValueText: 'مسح القيمة',
  limitText: count => `و ${count} أخرى`,
}

export const hi: TreeselectTexts = {
  placeholder: 'चुनें...',
  noResultsText: 'कोई परिणाम नहीं मिला',
  noOptionsText: 'कोई विकल्प उपलब्ध नहीं है।',
  noChildrenText: 'कोई उप-विकल्प नहीं है।',
  loadingText: 'लोड हो रहा है...',
  searchPromptText: 'खोजने के लिए टाइप करें...',
  retryText: 'पुनः प्रयास करें?',
  retryTitle: 'पुनः प्रयास करने के लिए क्लिक करें',
  clearAllText: 'सभी हटाएँ',
  clearValueText: 'मान हटाएँ',
  limitText: count => `और ${count} अन्य`,
}

export const ko: TreeselectTexts = {
  placeholder: '선택하세요...',
  noResultsText: '검색 결과가 없습니다',
  noOptionsText: '선택 가능한 항목이 없습니다.',
  noChildrenText: '하위 항목이 없습니다.',
  loadingText: '불러오는 중...',
  searchPromptText: '검색어를 입력하세요...',
  retryText: '다시 시도할까요?',
  retryTitle: '클릭하여 다시 시도',
  clearAllText: '모두 지우기',
  clearValueText: '지우기',
  limitText: count => `외 ${count}개`,
}

export const nl: TreeselectTexts = {
  placeholder: 'Selecteer...',
  noResultsText: 'Geen resultaten gevonden',
  noOptionsText: 'Geen opties beschikbaar.',
  noChildrenText: 'Geen sub-opties.',
  loadingText: 'Laden...',
  searchPromptText: 'Typ om te zoeken...',
  retryText: 'Opnieuw proberen?',
  retryTitle: 'Klik om opnieuw te proberen',
  clearAllText: 'Alles wissen',
  clearValueText: 'Waarde wissen',
  limitText: count => `en nog ${count}`,
}

export const sv: TreeselectTexts = {
  placeholder: 'Välj...',
  noResultsText: 'Inga resultat hittades',
  noOptionsText: 'Inga alternativ tillgängliga.',
  noChildrenText: 'Inga underalternativ.',
  loadingText: 'Laddar...',
  searchPromptText: 'Skriv för att söka...',
  retryText: 'Försök igen?',
  retryTitle: 'Klicka för att försöka igen',
  clearAllText: 'Rensa alla',
  clearValueText: 'Rensa värde',
  limitText: count => `och ${count} till`,
}

export const cs: TreeselectTexts = {
  placeholder: 'Vyberte...',
  noResultsText: 'Nic nenalezeno',
  noOptionsText: 'Žádné možnosti.',
  noChildrenText: 'Žádné podřízené možnosti.',
  loadingText: 'Načítání...',
  searchPromptText: 'Pište pro vyhledávání...',
  retryText: 'Zkusit znovu?',
  retryTitle: 'Klikněte pro nový pokus',
  clearAllText: 'Vymazat vše',
  clearValueText: 'Vymazat hodnotu',
  limitText: count => `a dalších ${count}`,
}

export const vi: TreeselectTexts = {
  placeholder: 'Chọn...',
  noResultsText: 'Không tìm thấy kết quả',
  noOptionsText: 'Không có tùy chọn nào.',
  noChildrenText: 'Không có tùy chọn con.',
  loadingText: 'Đang tải...',
  searchPromptText: 'Nhập để tìm kiếm...',
  retryText: 'Thử lại?',
  retryTitle: 'Nhấp để thử lại',
  clearAllText: 'Xóa tất cả',
  clearValueText: 'Xóa giá trị',
  limitText: count => `và ${count} mục khác`,
}

export const id: TreeselectTexts = {
  placeholder: 'Pilih...',
  noResultsText: 'Tidak ada hasil',
  noOptionsText: 'Tidak ada pilihan.',
  noChildrenText: 'Tidak ada sub-pilihan.',
  loadingText: 'Memuat...',
  searchPromptText: 'Ketik untuk mencari...',
  retryText: 'Coba lagi?',
  retryTitle: 'Klik untuk mencoba lagi',
  clearAllText: 'Hapus semua',
  clearValueText: 'Hapus nilai',
  limitText: count => `dan ${count} lainnya`,
}

export const he: TreeselectTexts = {
  placeholder: 'בחירה...',
  noResultsText: 'לא נמצאו תוצאות',
  noOptionsText: 'אין אפשרויות זמינות.',
  noChildrenText: 'אין תת-אפשרויות.',
  loadingText: 'טוען...',
  searchPromptText: 'הקלידו כדי לחפש...',
  retryText: 'לנסות שוב?',
  retryTitle: 'לחצו כדי לנסות שוב',
  clearAllText: 'נקה הכול',
  clearValueText: 'נקה ערך',
  limitText: count => `ועוד ${count}`,
}

export const ro: TreeselectTexts = {
  placeholder: 'Selectați...',
  noResultsText: 'Niciun rezultat găsit',
  noOptionsText: 'Nicio opțiune disponibilă.',
  noChildrenText: 'Nicio sub-opțiune.',
  loadingText: 'Se încarcă...',
  searchPromptText: 'Tastați pentru a căuta...',
  retryText: 'Reîncercați?',
  retryTitle: 'Clic pentru a reîncerca',
  clearAllText: 'Șterge tot',
  clearValueText: 'Șterge valoarea',
  limitText: count => `și încă ${count}`,
}

/**
 * Built-in locales by language code
 */
export const locales: Record<string, TreeselectTexts> = {
  en, ru, uk, de, fr, es, it, pt, pl, tr, zh, ja, ar, hi, ko, nl, sv, cs, vi, id, he, ro,
}

/**
 * Provide a locale for all Treeselect components of an app:
 * `app.provide(TREESELECT_LOCALE, 'ru')`. The `locale` prop takes precedence.
 */
export const TREESELECT_LOCALE: InjectionKey<TreeselectLocale> = Symbol('vue-treeselect-locale')

/**
 * Resolve a locale (code or partial texts) to complete texts, falling back to English
 */
export function resolveLocale(locale: TreeselectLocale | null | undefined): TreeselectTexts {
  if (!locale) return en
  if (typeof locale === 'string') {
    // "ru-RU" → "ru"
    return locales[locale] || locales[locale.toLowerCase().split(/[-_]/)[0]] || en
  }
  return { ...en, ...locale }
}
