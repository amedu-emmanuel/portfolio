const { useState } = React;

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tony Elumelu Foundation • Sep 2024 – Present',
    bullets: [
      'Design and maintain highly available backend services for a platform serving hundreds of thousands of users.',
      'Build scalable REST APIs and cloud-native services that support new business capabilities.',
      'Lead performance tuning, production troubleshooting, mentoring, and engineering quality practices.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Union Bank of Nigeria • Aug 2022 – Sep 2024',
    bullets: [
      'Developed secure backend services for digital banking and high-volume financial transactions.',
      'Built distributed microservices and integration layers across internal and external systems.',
      'Collaborated with cross-functional stakeholders to deliver compliant, reliable solutions.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Izivote • Oct 2021 – Jun 2022',
    bullets: [
      'Built web applications with an emphasis on performance, security, and user experience.',
      'Developed RESTful APIs and integrated third-party services for extended functionality.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Sterling Bank PLC • Jul 2019 – Oct 2021',
    bullets: [
      'Delivered digital banking solutions with a strong focus on security and compliance.',
      'Contributed to microservice-based applications for real-time transaction processing.'
    ]
  }
];

const projects = [
  {
    title: 'TEFConnect Platform Modernization',
    link: 'https://tefconnect.com',
    description: 'Led the redesign and development of Africa’s largest entrepreneurship platform with scalable cloud-native solutions.',
    tags: ['Cloud-native', 'Scalable APIs', 'High Availability']
  },
  {
    title: 'HeirsNexus Digital Platform',
    link: 'https://heirsnexus.com',
    description: 'Delivered a digital collaboration platform for the Heirs Holdings ecosystem with strong reliability, security, and performance.',
    tags: ['Enterprise Platform', 'Security', 'Performance']
  },
  {
    title: 'My Bank Statement Integration',
    description: 'Integrated secure statement generation and delivery into Union Bank’s e-channels platform to improve efficiency and customer experience.',
    tags: ['Banking Integration', 'Automation', 'Digital Workflow']
  },
  {
    title: 'Automatic PND Placements',
    description: 'Built an automated recurring restriction workflow that improved branch operations and strengthened account security.',
    tags: ['Automation', 'Operational Efficiency', 'Banking Security']
  }
];

const skills = [
  ['Languages', 'Java, C#, JavaScript, TypeScript'],
  ['Frameworks', '.NET, ASP.NET Core, Spring Boot, JPA/Hibernate, Spring Security, React, Vue.js'],
  ['Data & Messaging', 'MySQL, PostgreSQL, Oracle, Kafka, RabbitMQ, Azure Service Bus'],
  ['Cloud & DevOps', 'AWS, Azure, Docker, Kubernetes, CI/CD, Git']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">Emmanuel Amedu</a>
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Architect | Backend Systems | Cloud Architecture</p>
              <h1>Building secure, scalable platforms for mission-critical digital services.</h1>
              <p className="hero-text">
                I’m Emmanuel Amedu, a software architect with over 7 years of experience delivering resilient banking, fintech, and enterprise applications across Africa.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View Projects</a>
                <a className="btn btn-secondary" href="#contact">Let’s Connect</a>
              </div>
              <div className="metric-row">
                <div className="metric-card"><strong>7+</strong><span>Years Experience</span></div>
                <div className="metric-card"><strong>100k+</strong><span>Users Supported</span></div>
                <div className="metric-card"><strong>10+</strong><span>High-Impact Systems</span></div>
              </div>
            </div>
            <div className="hero-card">
              <div className="photo-wrap">
                <img src="profile.jpg" alt="Emmanuel Amedu" className="profile-photo" />
              </div>
              <div className="card-pill">Available for impactful roles</div>
              <h3>Core strengths</h3>
              <ul>
                <li>High-availability backend architecture</li>
                <li>REST APIs and distributed systems</li>
                <li>Database performance and observability</li>
                <li>Cloud deployment and DevOps practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Engineering excellence with a product and reliability mindset.</h2>
            </div>
            <div className="about-copy">
              <p>
                I design and build secure, scalable enterprise applications that power high-volume transactions and digital experiences. My background spans backend engineering, distributed systems, payment integrations, and performance optimization in both banking and nonprofit environments.
              </p>
              <p>
                I enjoy translating business complexity into dependable software, mentoring teams, and improving platform stability in fast-paced agile environments.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <p className="eyebrow">Experience</p>
            <h2>Career highlights</h2>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <h3>{item.title}</h3>
                    <p className="company">{item.company}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.link ? <a href={project.link} target="_blank" rel="noreferrer">Visit site</a> : null}
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <p className="eyebrow">Skills</p>
            <h2>Technology stack and strengths</h2>
            <div className="skills-grid">
              {skills.map(([title, description]) => (
                <div className="skill-card" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cert-grid">
            <div>
              <p className="eyebrow">Certifications</p>
              <h2>Professional credentials</h2>
            </div>
            <div className="cert-list">
              <div className="cert-card">AWS Certified Solutions Architect – Associate</div>
              <div className="cert-card">Microsoft Certified: Azure Solutions Architect Expert</div>
              <div className="cert-card">Microsoft Certified: Azure Administrator Associate</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-wrap">
          <div>
            <h2>Let’s build the next reliable platform.</h2>
            <p>Open to opportunities in backend engineering, platform engineering, and software leadership.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:emmanuelamedu5@gmail.com">emmanuelamedu5@gmail.com</a>
            <a href="tel:+2347068795337">+234 706 879 5337</a>
            <a href="https://github.com/amedu" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
