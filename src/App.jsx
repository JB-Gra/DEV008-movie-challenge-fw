import { useFetch } from './useFetch'
import styles from './App.module.css'
import Header from './components/Header.jsx'
import Intro from './components/Intro';

function App() {
  const url = 'https://www.omdbapi.com/?';
  const apiKey = 'apikey=b1b63af5';

  const { movie, loading } = useFetch(url + apiKey + '&s=wedding&page=1');

  return (
    <>
      <div className={`${styles.pageContainer} ${styles.flex}`}>
        <Header />
        <Intro />
        <section>
          {loading && <p>Loading...</p>}
          {movie.map((film) => {
            return (
            <img key={film.imdbID} src={film.Poster} />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App

// https://www.omdbapi.com/?apikey=b1b63af5