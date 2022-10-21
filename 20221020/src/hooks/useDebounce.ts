import { useEffect, useState } from 'react'

interface IProps {
  func: () => void
}

export const useDebounce = ({ func }: IProps) => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [func])
  return isActive
}
