import styles from './head.module.scss'

const Head = () => {
  return (
    <thead>
      <tr className={styles.row}>
        <th>{}</th>
        <th>이미지</th>
        <th>상품제목</th>
        <th>상품 상세설명</th>
        <th>가격</th>
        <th>업로드날짜</th>
      </tr>
    </thead>
  )
}

export default Head
