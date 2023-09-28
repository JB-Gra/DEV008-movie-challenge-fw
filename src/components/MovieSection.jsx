/* eslint-disable react/prop-types */
import styles from '../App.module.css'
import { useFetch } from '../useFetch';

function MovieSection(props) {
  const movieTitle = props.title;
  const searchTitle = props.search;
  
  const url = 'https://www.omdbapi.com/?';
  const apiKey = 'apikey=b1b63af5';

  const { movie, loading, error } = useFetch(url + apiKey + '&s=' + searchTitle);

  return (
    <section className={`${styles.sectionContainer} ${styles.flex}`}>
      <h2 className={styles.sectionTitle}>{movieTitle}</h2>
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      <div className={`${styles.movieList} ${styles.grid}`}>
      {movie.map((film) => {
        return (
        <div key={film.imdbID} className={styles.movieDetail}>
          <img src={film.Poster} className={styles.posterImg} />
          <p className={`${styles.movieTitle} ${styles.animatedUnderline}`}>{film.Title}</p>
        </div>
        )
      })}
      </div>
    </section>
  )
}

export default MovieSection
