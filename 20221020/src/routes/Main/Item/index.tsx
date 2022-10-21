import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { IItem } from 'types/data'

import styles from './item.module.scss'

interface IProps {
  item: IItem
}

const Item = ({ item }: IProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`detail/${item.id}`)
  }
  return (
    <button type='button' className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={item.images} alt={item.title} />
      <div className={styles.infoBox}>
        <div className={styles.title}>{item.title}</div>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.price}>{item.price}</div>
        <div className={styles.createdAt}>{dayjs(item.createdAt).format('YYYY-MM-DD')}</div>
      </div>
    </button>
  )
}

export default Item
