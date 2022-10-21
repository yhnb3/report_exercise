import { MouseEventHandler } from 'react'
import { useRecoilState } from 'recoil'
import { basketState } from 'state'
import styles from './basket.module.scss'
import Row from './Row'

const Basket = () => {
  const [basketData, setBasketData] = useRecoilState(basketState)
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
  return (
    <article className={styles.container}>
      <table className={styles.table}>
        <tr>
          <th>{}</th>
          <th>이미지</th>
          <th>상품제목</th>
          <th>상품 상세설명</th>
          <th>가격</th>
          <th>업로드날짜</th>
        </tr>
        {basketData.map((item) => {
          const key = `basket-${item.id}`
          return <Row item={item} key={key} handleData={handleData} />
        })}
      </table>
    </article>
  )
}

export default Basket
