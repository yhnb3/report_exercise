import { MutableRefObject, useCallback, useEffect } from 'react'

interface IProps {
  target: MutableRefObject<Element | null>
  func: () => void
}

export const useInfinityScroll = ({ target, func }: IProps) => {
  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.isIntersecting && func()
      })
    },
    [func]
  )

  useEffect(() => {
    if (!target.current) return undefined
    const observer = new IntersectionObserver(callback, {
      threshold: 1.0,
    })
    observer.observe(target.current)
    return () => observer.disconnect()
  }, [target, callback])
}
