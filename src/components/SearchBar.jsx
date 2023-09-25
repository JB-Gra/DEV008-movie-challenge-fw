import styles from '../App.module.css'
import { useState} from 'react';
// import { useFetch } from '../useFetch';
// import MovieSection from './MovieSection';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  // const url = 'https://www.omdbapi.com/?';
  // const apiKey = 'apikey=b1b63af5';

  function onSearch(e) {
    setSearchTerm(e.target.value);
    alert('Buscaste: ' + searchTerm)
  }

  if (searchTerm) {
    // ...
  }

  return (
    <div className={`${styles.searchContainer} ${styles.flex}`}>
      <label className={styles.inputLabel}>Ingresa aquí el nombre de la película que quieres buscar:</label>
      <div className={styles.inputContainer}>
        <input type="text" id='movie-search' name='movie-search' onChange={event => setSearchTerm(event.target.value)} value={searchTerm} placeholder='Solo títulos en inglés. Ej. "Despicable Me"' className={styles.searchBar} />
        <button onClick={onSearch} className={styles.searchBtn}>Buscar</button>
      </div>
    </div>
  )

}

export default SearchBar