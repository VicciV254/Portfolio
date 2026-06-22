import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home"><i className="fas fa-home"></i> Home</a>
      <a href="#about"><i className="fas fa-user-astronaut"></i> About</a>
      <a href="#skills"><i className="fas fa-code"></i> Skills</a>
      <a href="#contact"><i className="fas fa-paper-plane"></i> Contact</a>
    </nav>
  )
}

export default Navbar
