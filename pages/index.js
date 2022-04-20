import { Headjs } from '../components/Head/Head'
import { HomePage } from '../components/home/Home'
import { Me } from '../components/Me/'
import { NavBar } from '../components/NavBar'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home () {
  return (
      <>
      <Headjs title="Oscar Carranza"/>
      <NavBar/>
      <HomePage/>
      <Projects/>
      <Skills/>
      </>
  )
}
