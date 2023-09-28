/* eslint-disable react/prop-types */
import styles from '../App.module.css';
import { useState } from 'react';
import { useFetch } from '../useFetch';

function SearchBar() {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  // useEffect(() => {
  //   console.log('Buscaste: ' + search);
  // }, [search]);

  return (
    <section className={`${styles.searchContainer} ${styles.flex}`}>
      <label className={styles.inputLabel}>Ingresa aquí el nombre de la película que quieres buscar:</label>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          id='movie-search' 
          name='movie-search' 
          onChange={handleSearch} 
          value={search}
          placeholder='Solo títulos en inglés. Ej. "Despicable Me"' 
          className={styles.searchBar} 
        />
      </div>
      {(search) ? <SearchResults className={`${styles.searchResultsContainer} ${styles.flex}`} name={'Resultados de búsqueda de: ' + search} search={search}/> : null}
    </section>
  )
  
  function SearchResults({name, value}) {
    const url = `https://www.omdbapi.com/?apikey=b1b63af5&s=${value}`;

    const { movie, loading, error} = useFetch(url);

    return (
      <section className={`${styles.searchResultsContainer} ${styles.flex}`}>
        <h2 className={styles.sectionTitle}>{name}</h2>
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading...</p>}
        {value ? (<div className={`${styles.movieList} ${styles.grid}`}>
        {movie.map((film) => {
          return (
          <div key={film.imdbID} className={styles.movieDetail}>
            <img src={film.Poster} className={styles.posterImg} />
            <p className={`${styles.movieTitle} ${styles.animatedUnderline}`}>{film.Title}</p>
          </div>
          )
        })}
        </div>) : 'No se encontró resultados'}
        
      </section>
    )
  }
}

export default SearchBar;