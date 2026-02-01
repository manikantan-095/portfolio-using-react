import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2021 - Present',
      description: 'Led development of mission-critical applications, mentored 5+ junior developers, improved system performance by 40%',
      achievements: [
        'Architected microservices-based platform',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored and code reviewed junior developers'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      duration: '2018 - 2021',
      description: 'Developed and maintained 10+ web applications using modern tech stack, managed client relationships',
      achievements: [
        'Built real-time collaboration features',
        'Optimized database queries reducing load time by 50%',
        'Led migration from monolith to microservices'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'WebDev Studio',
      duration: '2016 - 2018',
      description: 'Started web development journey, learned full stack development, contributed to multiple projects',
      achievements: [
        'Built responsive web applications',
        'Fixed 100+ bugs in production',
        'Participated in code reviews and team meetings'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Tech University',
      year: '2016'
    },
    {
      degree: 'Full Stack Development',
      field: 'Web Development',
      institution: 'Online Academy',
      year: '2015'
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="experience-content">
          <div className="experience-column">
            <h3 className="column-title">💼 Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item fade-in-up">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h4>{exp.role}</h4>
                      <span className="duration">{exp.duration}</span>
                    </div>
                    <p className="company">{exp.company}</p>
                    <p className="description">{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>✓ {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title">🎓 Education</h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="education-item fade-in-up">
                  <div className="education-icon">🎯</div>
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <p className="field">{edu.field}</p>
                    <p className="institution">{edu.institution}</p>
                    <span className="year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="certifications fade-in-up">
              <h3 className="section-subtitle">📜 Certifications</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <span>AWS Certified Solutions Architect</span>
                  <span className="cert-year">2023</span>
                </div>
                <div className="cert-item">
                  <span>Google Cloud Professional Developer</span>
                  <span className="cert-year">2022</span>
                </div>
                <div className="cert-item">
                  <span>Certified Kubernetes Administrator</span>
                  <span className="cert-year">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
