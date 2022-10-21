import { IItem } from 'types/data.d'
import styles from './row.module.scss'

interface IProps {
  item: IItem
  handleData: (id: string) => void
}

const Row = ({ item, handleData }: IProps) => {
  const handleClick = () => {
    handleData(String(item.id))
  }

  return (
    <tr className={styles.row}>
      <td className={styles.inputBox}>
        <input type='checkbox' checked={!!item.checked} data-id={item.id} onClick={handleClick} />
      </td>
      <td>
        <img className={styles.image} src={item.images} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.createdAt}</td>
    </tr>
  )
}

export default Row
