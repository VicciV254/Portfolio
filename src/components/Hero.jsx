import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home">
      <div className="hero glass-card">
        <h1>Victor Mutua</h1>
        <p className="tagline"><i className="fas fa-microchip"></i>  Shaping Tomorrow's Code & Data</p>
        <div className="hero-tags">
          <span><i className="fas fa-graduation-cap"></i> Computer Science at Technical University of Mombasa</span>
          <span><i className="fas fa-chart-line"></i> Data Alchemist</span>
          <span><i className="fas fa-laptop-code"></i> Software Architect</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
