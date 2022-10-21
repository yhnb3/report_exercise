import { useMemo, useRef, useState } from 'react'

import { DATA } from 'constant'

import styles from './main.module.scss'
import Item from './Item'
import { useInfinityScroll } from 'hooks'

const Main = () => {
  const [page, setPage] = useState(1)
  const trigger = useRef<HTMLDivElement | null>(null)

  const addItems = () => {
    setPage((prev) => prev + 1)
  }
  useInfinityScroll({ target: trigger, func: addItems })

  const items = useMemo(() => {
    const data = DATA.slice(0, page * 10)
    return data.map((item) => {
      const key = `item-${item.id}`
      return <Item key={key} item={item} />
    })
  }, [page])
  return (
    <article className={styles.container}>
      <div className={styles.items}>
        {items}
        <div className={styles.trriger} ref={trigger} />
      </div>
    </article>
  )
}

export default Main
