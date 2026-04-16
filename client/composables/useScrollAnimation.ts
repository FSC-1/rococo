export const useScrollAnimation = () => {
  const elements = ref<HTMLElement[]>([])
  const isVisible = ref(false)

  const observe = (el: HTMLElement) => {
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(el)
    elements.value.push(el)

    return () => {
      observer.disconnect()
    }
  }

  onUnmounted(() => {
    elements.value.forEach((el) => {
      if (el) {
        // Cleanup if needed
      }
    })
  })

  return {
    observe,
    isVisible,
  }
}
