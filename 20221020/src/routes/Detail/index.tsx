import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import store from 'store'

import { basketState } from 'state'
import { DATA } from 'constant'

import styles from './detail.module.scss'

const Detail = () => {
  const { id } = useParams()
  const setBasket = useSetRecoilState(basketState)
  const targetItem = DATA.filter((item) => item.id === Number(id))[0]
  const handleClickBasket = () => {
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
          <div className={styles.createdAt}>{targetItem.createdAt}</div>
        </div>
      </div>
    </article>
  )
}

export default Detail
