import styles from '../App.module.css'

function SearchBar() {
  return (
    <div className={`${styles.searchContainer} ${styles.flex}`}>
      <input type="search" id='movie-search' placeholder='Escribe el título de la película que buscas' className={styles.searchBar} />
      <button className={styles.searchBtn}>Buscar Película</button>
    </div>
  )
}

export default SearchBar