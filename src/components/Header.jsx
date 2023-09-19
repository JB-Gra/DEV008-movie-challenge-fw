import styles from '../App.module.css'

function Header() {
  // ...
  return (
    <header className={`${styles.header} ${styles.flex}`}>
      <h1 className={styles.logo}>&lt;Labo-Cine&gt;</h1>
      <div className={`${styles.searchContainer} ${styles.flex}`}>
        <input type="search" id='movie-search' placeholder='Escribe el título de la película que buscas' className={styles.searchBar} />
        <button className={styles.searchBtn}>Buscar Película</button>
      </div>
    </header>
  )
}

export default Header