import { Outlet } from 'react-router-dom'
import Header from './Header'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
