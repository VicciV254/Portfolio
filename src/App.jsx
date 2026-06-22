import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
