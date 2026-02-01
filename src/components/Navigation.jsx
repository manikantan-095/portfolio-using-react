import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-section">
          <h2 className="logo">Manikantan</h2>
          <span className="subtitle">Senior Web Developer</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary btn-sm">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
