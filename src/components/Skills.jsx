import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS/SASS', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 93 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 91 },
        { name: 'Python', level: 87 },
        { name: 'RESTful APIs', level: 94 },
        { name: 'GraphQL', level: 88 },
        { name: 'WebSockets', level: 86 }
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 89 },
        { name: 'Redis', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'Firebase', level: 82 },
        { name: 'SQL', level: 92 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 87 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD', level: 88 },
        { name: 'Linux', level: 86 },
        { name: 'Webpack', level: 84 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIdx * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills fade-in-up">
          <h3>Other Competencies</h3>
          <div className="tags">
            <span className="tag">Agile/Scrum</span>
            <span className="tag">System Design</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Code Review</span>
            <span className="tag">Mentoring</span>
            <span className="tag">Performance Optimization</span>
            <span className="tag">Security Best Practices</span>
            <span className="tag">Technical Documentation</span>
            <span className="tag">Test Driven Development</span>
            <span className="tag">Microservices</span>
          </div>
        </div>
      </div>
    </section>
  )
}
