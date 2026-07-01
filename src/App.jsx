import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Organization from './components/Organization'
import Education from './components/Education'
import Skills from './components/Skills'
import Awards from './components/Awards'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-logo">FHE</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
      <main>
        <div id="about">
          <Hero />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="certificates">
          <Certificates />
        </div>
        <div id="organization">
          <Organization />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="awards">
          <Awards />
        </div>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Fashli Hafiy Edrian. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
