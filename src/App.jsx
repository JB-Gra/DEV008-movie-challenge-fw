import styles from './App.module.css'
import Header from './components/Header.jsx'
import Intro from './components/Intro';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className={`${styles.pageContainer} ${styles.flex}`}>
        <Header />
        <Intro />
        <MovieSection title={'¡Toma ideas para tu boda!'} search={'wedding'} />
        <MovieSection title={'Temporada spooky 🎃'} search={'halloween'} />
        <MovieSection title={'Adrenalina pura'} search={'furious'} />
        <Footer />
      </div>
    </>
  )
}

export default App

// https://www.omdbapi.com/?apikey=b1b63af5