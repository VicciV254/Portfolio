import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about">
      <h2 className="section-title"><i className="fas fa-user-edit"></i> About Me</h2>
      <div className="about-grid">
        <div className="glass-card about-text">
          <p><i className="fas fa-smile-wink"></i> My name is <strong>Victor Mutua</strong>,I am 20 years old — a passionate university student diving deep into <strong>Computer Science</strong> at <strong>Technical University of Mombasa</strong>.</p>
          <p>🌍 The world is racing toward a tech-driven future, and I chose computer science to be <strong>part of that revolution</strong>. From algorithms to data systems, I'm determined to craft solutions that push boundaries.</p>
          <p>✨ My ultimate dream: <strong>leave a mark</strong> in the tech ecosystem, build impactful tools, and continuously sharpen my skills while inspiring others.</p>
          <div className="interests-extra">
            <div className="interest-item"><i className="fas fa-brain"></i> AI Enthusiast</div>
            <div className="interest-item"><i className="fas fa-database"></i> Big Data</div>
            <div className="interest-item"><i className="fas fa-cloud"></i> Cloud Computing</div>
          </div>
        </div>
        <div className="skills-box glass-card" id="skills">
          <h3><i className="fas fa-cogs"></i> Core Focus</h3>
          <div className="skill-tags">
            <span>Data Analyst</span>
            <span>Software Developer</span>
            <span>Python/SQL</span>
            <span>JavaScript/React</span>
            <span>Tableau/PowerBI</span>
            <span>Machine Learning</span>
          </div>
          <div className="interests-section">
            <h3><i className="fas fa-heart"></i> Interests & Passions</h3>
            <div className="skill-tags">
              <span>🔍 Data Storytelling</span>
              <span>🛠️ Open Source</span>
              <span>🤖 Automation</span>
              <span>📊 Business Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
