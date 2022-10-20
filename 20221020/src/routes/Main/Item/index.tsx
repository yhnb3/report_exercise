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
      <img src={item.images} alt={item.title} />
      <div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div>{item.price}</div>
        <div>{item.createdAt}</div>
      </div>
    </button>
  )
}

export default Item
