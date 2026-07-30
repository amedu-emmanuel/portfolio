import { useState } from 'react';

/* const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tony Elumelu Foundation • Sep 2024 – Present',
    companyName: 'Tony Elumelu Foundation',
    logo: '/images/tony-elumelu-foundation.png',
    bullets: [
      'Design and maintain high-availability backend systems for a platform serving hundreds of thousands of users.',
      'Build scalable REST APIs and cloud-native services that support new business capabilities.',
      'Lead performance tuning, production troubleshooting, mentoring, and engineering quality practices.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Union Bank of Nigeria • Aug 2022 – Sep 2024',
    companyName: 'Union Bank of Nigeria',
    logo: '/images/union-bank.png',
    bullets: [
      'Developed secure backend services for digital banking and high-volume financial transactions.',
      'Built distributed microservices and integration layers across internal and external systems.',
      'Collaborated with cross-functional stakeholders to deliver compliant, reliable solutions.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Izivote • Oct 2021 – Jun 2022',
    companyName: 'Izivote',
    logo: '/images/izivote.jpg',
    bullets: [
      'Built web applications with a focus on performance, security, and user experience.',
      'Developed RESTful APIs and integrated third-party services for extended functionality.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Sterling Bank PLC • Jul 2019 – Oct 2021',
    companyName: 'Sterling Bank PLC',
    logo: '/images/sterling-bank.jpg',
    bullets: [
      'Delivered digital banking solutions with a strong focus on security and compliance.',
      'Contributed to microservice-based applications for real-time transaction processing.'
    ]
  }
]; */

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
  ['Backend Engineering', 'Java, C#, Spring Boot, ASP.NET Core, Node.js'],
  ['Frontend Engineering', 'React, Vue.js, TypeScript, JavaScript'],
  ['Data & Messaging', 'MySQL, PostgreSQL, Oracle, Kafka, RabbitMQ, Azure Service Bus'],
  ['Cloud & DevOps', 'AWS, Azure, Docker, Kubernetes, CI/CD, Git']
];

const services = [
  {
    title: 'Software Development',
    text: 'I turn product ideas into secure, maintainable platforms that scale confidently from day one.'
  },
  {
    title: 'Platform Engineering',
    text: 'I design distributed systems, APIs, and cloud-native services that stay reliable under pressure.'
  },
  {
    title: 'Technical Leadership',
    text: 'I mentor teams, improve delivery quality, and help shape engineering standards that last.'
  }
];

const partners = [
  { name: 'Tony Elumelu Foundation', logo: '/images/tony-elumelu-foundation.png' },
  { name: 'Union Bank', logo: '/images/union-bank.png' },
  { name: 'Heirs Holdings', logo: '/images/heirs-holdings.png' },
  { name: 'Sterling Bank', logo: '/images/sterling-bank.jpg' },
  { name: 'Izivote', logo: '/images/izivote.jpg' }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">Emmanuel Amedu</a>
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
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
        <section className="hero-shell">
          <div className="container hero-intro">
            <div className="hero-copy">
              <p className="eyebrow">Software Architect • Backend Systems • Cloud Architecture</p>
              <h1>Building secure, scalable platforms that power modern digital experiences.</h1>
              <p className="hero-text">
                I’m Emmanuel Amedu, a software architect with over 7 years of experience delivering resilient banking, fintech, and enterprise applications across Africa.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View Projects</a>
                <a className="btn btn-secondary" href="#contact">Let’s Connect</a>
              </div>
              <div className="metric-row">
                <div className="metric-card"><strong>7+</strong><span>Years Experience</span></div>
                <div className="metric-card"><strong>100k+</strong><span>Users Served</span></div>
                <div className="metric-card"><strong>10+</strong><span>High-Impact Systems</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-strip">
          <div className="container">
            <p className="eyebrow">Professional Experience Across</p>
            <div className="partner-row">
              {partners.map((partner) => (
                <div className="partner-pill" key={partner.name}>
                  {partner.logo ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Architecture-led engineering with a product mindset and a reliability-first approach.</h2>
            </div>
            <div className="about-copy">
              <p>
                I design and build secure, scalable enterprise applications that power high-volume transactions and digital experiences. My background spans backend engineering, system design, solution architecture, and platform strategy across banking, fintech, and nonprofit environments.
              </p>
              <p>
                I enjoy translating business complexity into dependable software, guiding technical decisions, and strengthening platform stability in fast-paced, agile environments.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Focused on practical engineering depth.</h2>
            </div>
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
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What I Do</p>
              <h2>Bridging product ambition with dependable engineering.</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

{/*         <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>Career highlights</h2>
            </div>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <h3>{item.title}</h3>
                    <div className="company-meta">
                      {item.logo ? <img src={item.logo} alt={`${item.companyName} logo`} className="company-logo" /> : null}
                      <p className="company">{item.company}</p>
                    </div>
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Selected work</h2>
            </div>
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
