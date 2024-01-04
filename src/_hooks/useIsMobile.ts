import { useEffect, useState } from 'react'

export function useIsMobile() {
  const [width, setWidth] = useState<number>(0)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    }
  }, [window])

  const isMobile = width <= 768

  return isMobile
}
