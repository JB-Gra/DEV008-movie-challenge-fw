import styles from '../App.module.css'
import MovieSection from './MovieSection'
import SearchBar from './SearchBar'

function PageContainer() {
  return (
    <div className={`${styles.movieContainer} ${styles.flex}`}>
      <SearchBar />
      <MovieSection title={'¡Toma ideas para tu boda!'} search={'wedding'} />
      <MovieSection title={'Temporada spooky 🎃'} search={'halloween'} />
      <MovieSection title={'Adrenalina pura'} search={'furious'} />
    </div>
  )
}

export default PageContainer;