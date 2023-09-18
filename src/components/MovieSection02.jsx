import styles from '../App.module.css'
import { useFetch } from '../useFetch';

function MovieSection01() {
  const url = 'https://www.omdbapi.com/?';
  const apiKey = 'apikey=b1b63af5';

  const { movie, loading } = useFetch(url + apiKey + '&s=halloween&page=1');

  return (
  <section className={`${styles.sectionContainer} ${styles.flex}`}>
    <h2 className={styles.sectionTitle}>Temporada <em>spooky</em> 🎃</h2>
    {loading && <p>Loading...</p>}
    <div className={`${styles.movieList} ${styles.grid}`}>
    {movie.map((film) => {
      return (
      <div key={film.imdbID} className={styles.movieDetail}>
        <img src={film.Poster} className={styles.posterImg} />
        <p className={styles.movieTitle}>{film.Title}</p>
      </div>
      )
    })}
    </div>
  </section>
  )
}

export default MovieSection01
