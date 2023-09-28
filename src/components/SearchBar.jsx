/* eslint-disable react/prop-types */
import styles from '../App.module.css'
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searching, setSearching] = useState(true);

  const apiKey = 'b1b63af5'; // Replace with your actual OMDB API key

  const searchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError('Resultados no encontrados');
        }
      })
      .catch((error) => {
        console.error('Falló la búsqueda de películas:', error);
        setMovies([]);
        setError('Ocurrió un error al buscar las películas');
      })
      .finally(() => setSearching(false));
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <section className={`${styles.searchContainer} ${styles.flex}`} >
      <h2 className={styles.searchTitle}>Escribe la película o serie que quieras buscar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Sólo títulos en inglés. Ej. "Despicable Me"'
          value={query}
          onChange={handleInputChange}
          className={styles.searchBar}
        />
        <button type="submit" className={styles.searchBtn}>Buscar</button>
      </form>
      <div className={`${styles.searchResultsContainer} ${styles.flex}`}>
        <h2 className={styles.sectionTitle}>Resultados de la búsqueda de: {query}</h2>
        {error && <p>{error}</p>}
        {searching && <p>Buscando...</p>}
        <div className={`${styles.movieList} ${styles.grid}`}>
          {movies.map((movie) => {
            return (
              <div key={movie.imdbID} className={styles.movieDetail}>
                <img src={movie.Poster} alt={'Póster de ' + movie.Title} className={styles.posterImg} />
                <p className={`${styles.movieTitle} ${styles.animatedUnderline}`}>{movie.Title}</p>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;


// import styles from '../App.module.css';
// import { useState } from 'react';

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState('');

//   function handleSearch(e) {
//     setSearchTerm(e.target.value)
//     console.log('Término de búsqueda: ' + searchTerm)
//   }

//   return (
//     <section className={`${styles.searchContainer} ${styles.flex}`}>
//       <label className={styles.inputLabel}>Ingresa aquí el nombre de la película que quieres buscar:</label>
//       <div className={styles.inputContainer}>
//         <input 
//           type="text" 
//           id='movie-search' 
//           name='movie-search' 
//           onChange={handleSearch} 
//           value={searchTerm}
//           placeholder='Solo títulos en inglés. Ej. "Despicable Me"' 
//           className={styles.searchBar} 
//         />
//       </div>
//     </section>
//   )
// }

// export default SearchBar;