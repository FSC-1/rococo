import zhLocale from '~/locales/zh'

type Locale = 'ja' | 'zh'
type LocaleMessages = typeof zhLocale

const localeMessages: Record<Locale, LocaleMessages> = {
  'ja': {} as LocaleMessages,
  'zh': zhLocale,
}

export function useLocale() {
  // Try to get initial locale from localStorage, fallback to Japanese
  const getInitialLocale = (): Locale => {
    if (import.meta.client) {
      const stored = localStorage.getItem('rococo-locale')
      if (stored === 'ja' || stored === 'zh') {
        return stored
      }
    }
    return 'ja'
  }

  const locale = useState<Locale>('locale', getInitialLocale)

  const isJapanese = computed(() => locale.value === 'ja')
  const isChinese = computed(() => locale.value === 'zh')

  function setLocale(newLocale: Locale) {
    locale.value = newLocale
    if (import.meta.client) {
      document.documentElement.lang = newLocale
      localStorage.setItem('rococo-locale', newLocale)
    }
  }

  function toggleLocale() {
    setLocale(locale.value === 'ja' ? 'zh' : 'ja')
  }

  // Helper function to get translation
  function t(key: string): string {
    const keys = key.split('.')
    let value: any = localeMessages[locale.value]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to Japanese if key not found
        value = localeMessages['ja']
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2]
          } else {
            return key
          }
        }
        break
      }
    }

    return typeof value === 'string' ? value : key
  }

  return {
    locale,
    isJapanese,
    isChinese,
    setLocale,
    toggleLocale,
    t,
  }
}
