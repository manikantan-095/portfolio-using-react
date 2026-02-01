import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Tutorials', href: '#' },
        { label: 'Resources', href: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com', external: true },
        { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
        { label: 'Twitter', href: 'https://twitter.com', external: true },
        { label: 'Email', href: 'mailto:hello@manikantan.com' }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand">
            <h3>Manikantan</h3>
            <p>Senior Web Developer | Full Stack Specialist</p>
            <p className="tagline">Building digital experiences that matter</p>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                      {link.external && <span className="external-icon">↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Manikantan. All rights reserved.
          </p>
          <div className="footer-credit">
            <p>Designed & Built with <span className="heart">❤️</span> using React</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
