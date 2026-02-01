import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>
              I'm a Senior Web Developer with a passion for creating elegant, scalable solutions 
              to complex problems. With over 8 years of experience in full-stack development, 
              I've had the privilege to work with startups and enterprises alike.
            </p>
            
            <p>
              My journey in web development started with a simple curiosity about how websites work. 
              Today, I've evolved into a problem-solver who combines technical expertise with creative 
              thinking to deliver exceptional digital experiences.
            </p>

            <p>
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical blogs, or mentoring junior developers in the community. 
              I believe in continuous learning and staying updated with the latest technologies 
              and best practices in the industry.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="icon">🎯</span>
                <div>
                  <h4>Goal-Oriented</h4>
                  <p>Focus on delivering results that exceed expectations</p>
                </div>
              </div>
              <div className="highlight">
                <span className="icon">💡</span>
                <div>
                  <h4>Innovative Thinker</h4>
                  <p>Always looking for creative solutions to technical challenges</p>
                </div>
              </div>
              <div className="highlight">
                <span className="icon">🤝</span>
                <div>
                  <h4>Collaborative</h4>
                  <p>Strong believer in teamwork and knowledge sharing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image slide-in-right">
            <div className="image-container">
              <div className="image-placeholder">
                <div className="code-snippet">
                  <span className="code-comment">// about.js</span>
                  <span>{`const developer = {`}</span>
                  <span>{`  name: "Manikantan",`}</span>
                  <span>{`  expertise: "Full Stack",`}</span>
                  <span>{`  passion: "Building"`}</span>
                  <span>{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
