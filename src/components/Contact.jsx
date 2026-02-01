import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to get in touch!
            </p>

            <div className="contact-methods">
              <a href="mailto:hello@manikantan.com" className="contact-method">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@manikantan.com</p>
                </div>
                <span className="arrow">→</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/manikantan</p>
                </div>
                <span className="arrow">→</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/manikantan</p>
                </div>
                <span className="arrow">→</span>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">𝕏</span>
                <div>
                  <h4>Twitter</h4>
                  <p>@manikantan_dev</p>
                </div>
                <span className="arrow">→</span>
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>

          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
