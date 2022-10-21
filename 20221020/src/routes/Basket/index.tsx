import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { basketState } from 'state'
import styles from './basket.module.scss'
import Head from './Head'
import Pagination from './Pagination'
import Row from './Row'

const Basket = () => {
  const [basketData, setBasketData] = useRecoilState(basketState)
  const [page, setPage] = useState(1)
  const pages = basketData.length % 10 ? Math.floor(basketData.length / 10) + 1 : basketData.length / 10
  const handleData = (id: string) => {
    const targetIdx = basketData.findIndex((item) => item.id === Number(id))
    setBasketData((prev) => {
      const targetItem = prev[targetIdx]
      return [
        ...prev.slice(0, targetIdx),
        { ...targetItem, checked: !targetItem.checked },
        ...prev.slice(targetIdx + 1),
      ]
    })
  }

  const handleClickBuy = () => {
    const checkedData = basketData.filter((item) => item.checked)
    // eslint-disable-next-line no-console
    console.log(checkedData)
  }
  return (
    <article className={styles.container}>
      <table className={styles.table}>
        <Head />
        <tbody>
          {basketData.slice(10 * (page - 1), 10 * page).map((item) => {
            const key = `basket-${item.id}`
            return <Row item={item} key={key} handleData={handleData} />
          })}
        </tbody>
      </table>
      <div className={styles.buttonBox}>
        <div />
        <button type='button' onClick={handleClickBuy}>
          구매하기
        </button>
      </div>
      {basketData.length > 10 && <Pagination setPage={setPage} pages={pages} page={page} />}
    </article>
  )
}

export default Basket
