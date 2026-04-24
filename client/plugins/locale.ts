export default defineNuxtPlugin((nuxtApp) => {
  // This plugin ensures locale state is properly synchronized with localStorage
  // It runs on app initialization and restores locale preference

  if (import.meta.client) {
    const storedLocale = localStorage.getItem('rococo-locale')
    if (storedLocale === 'ja' || storedLocale === 'zh') {
      // Update document lang attribute
      document.documentElement.lang = storedLocale
    }
  }
})
