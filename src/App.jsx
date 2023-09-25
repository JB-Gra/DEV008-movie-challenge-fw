import styles from './App.module.css'
import Header from './components/Header.jsx'
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className={`${styles.pageContainer} ${styles.flex}`}>
        <Header />
        <PageContainer />
        <Footer />
      </div>
    </>
  )
}

export default App

// https://www.omdbapi.com/?apikey=b1b63af5