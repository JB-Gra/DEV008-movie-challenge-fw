import styles from '../App.module.css'

function Header() {
  return (
    <header className={`${styles.header} ${styles.flex}`}>
      <h1 className={styles.logo}>&lt;Labo-Cine&gt;</h1>
    </header>
  )
}

export default Header