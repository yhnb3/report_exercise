import { Dispatch, SetStateAction, useEffect } from 'react'
import styles from './toast.module.scss'

interface IProps {
  isToast: boolean
  setIsToast: Dispatch<SetStateAction<boolean>>
}

const Toast = ({ isToast, setIsToast }: IProps) => {
  useEffect(() => {
    if (isToast) {
      const timer = setTimeout(() => {
        setIsToast(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isToast, setIsToast])

  return <div className={styles.toast}>장바구니에 넣었습니다.</div>
}

export default Toast
