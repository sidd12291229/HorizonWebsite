import './index.css'
import Favicon from './components/Favicon.tsx'
import NavBar from './components/NavBar.tsx'
import Home from './components/Home.tsx'
import Services from './components/Services.tsx'
import Questions from './components/Questions.tsx'
import Contacts from './components/Contacts.tsx'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "") {
    window.location.replace("/#home");
    } 
  }, [])
  return (
    <>
      <Favicon/>
      <NavBar/>
      <Home/>
      <Services/>
      <Questions/>
      <Contacts/>
    </>
  )
}

export default App