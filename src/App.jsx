import styles from './App.module.css'
import Header from './components/Header.jsx'
import Intro from './components/Intro';
import MovieSection01 from './components/MovieSection01';
import MovieSection02 from './components/MovieSection02';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className={`${styles.pageContainer} ${styles.flex}`}>
        <Header />
        <Intro />
        <MovieSection01 />
        <MovieSection02 />
        <Footer />
      </div>
    </>
  )
}

export default App

// https://www.omdbapi.com/?apikey=b1b63af5