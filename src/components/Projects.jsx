import { useState } from 'react'
import './Projects.css'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A scalable e-commerce platform with React frontend and Node.js backend',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'Real-time collaborative task management with WebSockets',
      image: '✓',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'fullstack',
      description: 'Interactive data visualization dashboard with real-time updates',
      image: '📊',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for social media platform with authentication',
      image: '🔌',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Weather Application',
      category: 'frontend',
      description: 'Beautiful weather app with real-time data and location services',
      image: '🌤️',
      tech: ['React', 'OpenWeather API', 'Geolocation'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Blogging Platform',
      category: 'fullstack',
      description: 'Full-featured blogging platform with CMS functionality',
      image: '✍️',
      tech: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
      link: '#',
      github: '#',
      featured: true
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ]

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <div 
              key={project.id} 
              className={`project-card fade-in-up ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-image">{project.image}</div>
                {project.featured && <span className="badge-featured">Featured</span>}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} className="link-btn">
                    View →
                  </a>
                  <a href={project.github} className="link-btn github">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta fade-in-up">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
