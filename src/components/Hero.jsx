import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Web Developer', 'React Expert', 'Full Stack Developer', 'Problem Solver']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex]
      
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [displayText, roleIndex, isDeleting, roles])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Manikantan</span>
            </h1>
            
            <div className="typing-section">
              <p className="hero-subtitle">
                I'm a <span className="typing-text">{displayText}<span className="cursor">|</span></span>
              </p>
            </div>

            <p className="hero-description">
              With 8+ years of experience in web development, I specialize in building scalable, 
              high-performance applications using React, Node.js, and modern web technologies. 
              Passionate about clean code, user experience, and mentoring junior developers.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary btn-lg">
                <span className="btn-icon">Get In Touch</span>
                <span>→</span>
              </a>
              <a href="#projects" className="btn btn-secondary btn-lg">
                View My Work
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="icon">Github</i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="icon">LinkedIn</i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="icon">Twitter</i>
              </a>
              <a href="mailto:hello@manikantan.com" title="Email">
                <i className="icon">Email</i>
              </a>
            </div>
          </div>

          <div className="hero-visual slide-in-right">
            <div className="code-block">
              <div className="code-header">
                <span>console.log()</span>
              </div>
              <pre><code>{`const manikantan = {
  name: "Manikantan",
  role: "Senior Web Developer",
  expertise: [
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AWS"
  ],
  passion: "Building amazing things"
}`}</code></pre>
            </div>

            <div className="floating-badge">
              <span>✨ Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
