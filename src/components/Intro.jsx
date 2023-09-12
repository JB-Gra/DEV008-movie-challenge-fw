import styles from '../App.module.css'
import relaxGirl from '../assets/relax-girl.png'

function Intro() {
  return (
    <section id='Welcome' className={`${styles.flex} ${styles.heroContainer}`}>
      <h3 className={styles.heroText}>¿Cansada de codear?<br />¡Es hora de una película!</h3>
      <img src={relaxGirl} className={styles.heroImg}/>
    </section>
  )
}

export default Intro