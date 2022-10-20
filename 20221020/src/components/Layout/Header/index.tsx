import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.navBtn}>
        <Link to=''>로고</Link>
      </div>
      <div className={styles.navBtn}>
        <Link to='basket'>장바구니</Link>
      </div>
    </header>
  )
}

export default Header
