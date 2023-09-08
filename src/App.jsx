import { useFetch } from './useFetch'
import './App.css'

function App() {
  const url = 'https://www.omdbapi.com/?';
  const apiKey = 'apikey=b1b63af5';

  const { movie, loading } = useFetch(url + apiKey + '&s=jaws');

  return (
    <>
      <div className="App">
        <header>
          <h1 className="logo">Labo-Cine</h1>
        </header>
        <section className="page-container">
          {loading && <p>Loading...</p>}
          {movie.map((film) => {
            return (
            <img key={film.imdbID} src={film.Poster} className='poster-img' />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
