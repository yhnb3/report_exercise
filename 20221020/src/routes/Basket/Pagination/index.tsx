import { Dispatch, SetStateAction } from 'react'
import cx from 'classnames'

import styles from './pagination.module.scss'

interface IProps {
  pages: number
  setPage: Dispatch<SetStateAction<number>>
  page: number
}

const Pagination = ({ pages, setPage, page }: IProps) => {
  const arr = new Array(pages).fill(0)
  return (
    <div className={styles.container}>
      {arr.map((_, idx) => {
        const key = `pagination-${idx + 1}`
        const handlePage = () => {
          setPage(idx + 1)
        }
        return (
          <button
            className={cx(styles.pageBtn, { [styles.current]: page === idx + 1 })}
            type='button'
            key={key}
            onClick={handlePage}
          >
            {idx + 1}
          </button>
        )
      })}
    </div>
  )
}
export default Pagination
