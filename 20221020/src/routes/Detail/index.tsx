import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import dayjs from 'dayjs'
import store from 'store'

import { basketState } from 'state'
import { DATA } from 'constant'

import styles from './detail.module.scss'
import Toast from './Toast'
import { useState } from 'react'

const Detail = () => {
  const { id } = useParams()
  const [basket, setBasket] = useRecoilState(basketState)
  const [isToast, setIsToast] = useState(false)

  const targetItem = DATA.filter((item) => item.id === Number(id))[0]
  const handleClickBasket = () => {
    setIsToast(true)
    if (basket.findIndex((item) => item.id === Number(id)) !== -1) return
    setBasket((prev) => {
      const newBasket = [...prev, { ...targetItem, checked: false }]
      store.set('basket', newBasket)
      return newBasket
    })
  }
  return (
    <article className={styles.container}>
      <img className={styles.image} src={targetItem.images} alt={targetItem.title} />
      <div className={styles.infoBox}>
        <div className={styles.title}>{targetItem.title}</div>
        <div className={styles.description}>{targetItem.description}</div>
        <div className={styles.price}>{targetItem.price}</div>
        <div className={styles.bottom}>
          <div className={styles.buttonBox}>
            <button type='button' className={styles.btn}>
              구매하기
            </button>
            <button type='button' className={styles.btn} onClick={handleClickBasket}>
              장바구니
            </button>
          </div>
          <div className={styles.createdAt}>{dayjs(targetItem.createdAt).format('YYYY-MM-DD')}</div>
        </div>
      </div>
      {isToast && <Toast isToast={isToast} setIsToast={setIsToast} />}
    </article>
  )
}

export default Detail
