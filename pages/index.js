import { Headjs } from '../components/Head/Head'
import { HomePage } from '../components/home/Home'
import { Me } from '../components/Me/Me'
import { NavBar } from '../components/navbar/NavBar'

export default function Home () {
  return (
      <>
      <Headjs title="Oscar Carranza"/>
      <NavBar/>
      <HomePage/>
      <Me/>
      </>
  )
}
