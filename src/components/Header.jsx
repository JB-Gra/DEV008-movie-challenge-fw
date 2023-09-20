import styles from '../App.module.css'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className={`${styles.header} ${styles.flex}`}>
      <h1 className={styles.logo}>&lt;Labo-Cine&gt;</h1>
      <SearchBar />
    </header>
  )
}

export default Header