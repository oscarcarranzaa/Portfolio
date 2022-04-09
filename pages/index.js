import { Headjs } from '../components/Head/Head'
import { HomePage } from '../components/home/Home'
import { Me } from '../components/Me/Me'
import { NavBar } from '../components/navbar/NavBar'
import styles from '../components/home/styles.module.css'

export default function Home () {
  return (
      <>
      <Headjs title="Oscar Carranza"/>
      <NavBar/>
      <main className={styles.gghgjgh}>ii</main>
      <HomePage/>
      <Me/>
      </>
  )
}
