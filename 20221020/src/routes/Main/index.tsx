import { useMemo, useState } from 'react'

import { DATA } from 'constant'

import styles from './main.module.scss'
import Item from './Item'

const Main = () => {
  const [data, setData] = useState(DATA)
  const items = useMemo(() => {
    return data.map((item) => {
      const key = `item-${item.id}`
      return <Item key={key} item={item} />
    })
  }, [data])

  return (
    <article className={styles.container}>
      <div className={styles.items}>{items}</div>
    </article>
  )
}

export default Main
