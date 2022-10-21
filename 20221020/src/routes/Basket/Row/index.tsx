import dayjs from 'dayjs'
import { IItem } from 'types/data.d'
import styles from './row.module.scss'

interface IProps {
  item: IItem
  handleData: (id: string) => void
}

const Row = ({ item, handleData }: IProps) => {
  const handleChange = () => {
    handleData(String(item.id))
  }

  return (
    <tr className={styles.row}>
      <td className={styles.inputBox}>
        <input type='checkbox' checked={!!item.checked} data-id={item.id} onChange={handleChange} />
      </td>
      <td className={styles.imageBox}>
        <img className={styles.image} src={item.images} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td className={styles.description}>{item.description}</td>
      <td>{item.price}</td>
      <td>{dayjs(item.createdAt).format('YYYY-MM-DD')}</td>
    </tr>
  )
}

export default Row
