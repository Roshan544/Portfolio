import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Main'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import WhatsApp from "./components/WhatsApp"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Toaster />
        <Footer />
        <WhatsApp />
      </div>
      <Toaster />
    </>
  )
}

export default App
