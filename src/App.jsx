import { useEffect, useState } from 'react';

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
  ['Solution Architecture', 'System design, integration architecture, technical roadmaps, cloud strategy, security, scalability, and stakeholder alignment'],
  ['Backend Engineering', 'Java, C#, Spring Boot, ASP.NET Core, Node.js'],
  ['Frontend Engineering', 'React, Vue.js, TypeScript, JavaScript'],
  ['Data & Messaging', 'MySQL, PostgreSQL, Oracle, Kafka, RabbitMQ, Azure Service Bus'],
  ['Cloud & DevOps', 'AWS, Azure, Docker, Kubernetes, CI/CD, Git']
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    logo: '/images/AWS-solutions-architect.jpeg'
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft Azure',
    logo: '/images/Microsoft-solutions-architect.jpeg'
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft Azure',
    logo: '/images/Microsoft-administrator.jpeg.jpg'
  }
];

const services = [
  {
    title: 'Solution Architecture',
    text: 'I turn complex business needs into secure, scalable solution blueprints, from system design and integrations to delivery-ready technical roadmaps.'
  },
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

const heroHeading = 'Building secure, scalable platforms that power modern digital experiences.';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedHeroHeading, setTypedHeroHeading] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedHeroHeading(heroHeading);
      return undefined;
    }

    let characterIndex = 0;
    let isDeleting = false;
    let typingTimer;

    const typeHeading = () => {
      characterIndex += isDeleting ? -1 : 1;
      setTypedHeroHeading(heroHeading.slice(0, characterIndex));

      if (!isDeleting && characterIndex === heroHeading.length) {
        isDeleting = true;
        typingTimer = window.setTimeout(typeHeading, 2200);
        return;
      }

      if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        typingTimer = window.setTimeout(typeHeading, 500);
        return;
      }

      typingTimer = window.setTimeout(typeHeading, isDeleting ? 20 : 40);
    };

    typeHeading();

    return () => window.clearTimeout(typingTimer);
  }, []);

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
            {/* <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a> */}
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
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
              <h1 aria-label={heroHeading}>
                <span aria-hidden="true">{typedHeroHeading}</span>
                <span aria-hidden="true" className="typewriter-cursor" />
              </h1>
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

        <section id="services" className="section">
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

        <section id="certifications" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Certifications</p>
              <h2>Certified to design, build, and operate at scale.</h2>
            </div>
            <div className="certification-grid">
              {certifications.map((certification) => (
                <article className="certification-card" key={certification.title}>
                  <div className="certification-logo">
                    <img src={certification.logo} alt={`${certification.title} certification badge`} />
                  </div>
                  <div>
                    <p>{certification.issuer}</p>
                    <h3>{certification.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <div className="contact-copy">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build the next reliable platform.</h2>
              <p>Open to opportunities in backend engineering, platform engineering, solution architecture, and software leadership.</p>
            </div>
            <div className="contact-card">
              <span>Reach out directly</span>
              <a className="contact-email" href="mailto:emmanuelamedu5@gmail.com">emmanuelamedu5@gmail.com</a>
              <div className="contact-meta">
                <a href="tel:+2347068795337">+234 706 879 5337</a>
              </div>
            </div>
          </div>
        </section>

        <section className="socials-section" aria-labelledby="socials-heading">
          <div className="container socials-layout">
            <div>
              <p className="eyebrow">Socials</p>
              <h2 id="socials-heading">Let’s stay connected.</h2>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/emmanuelamedu/" target="_blank" rel="noreferrer" aria-label="Visit Emmanuel Amedu on LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.1h4.95V24H.5V8.1ZM8.55 8.1h4.75v2.17h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.94 3.3 5.94 7.59V24H19v-7.72c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.96 2-2.96 4.07V24H8.55V8.1Z" /></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/amedu-emmanuel" target="_blank" rel="noreferrer" aria-label="Visit Emmanuel Amedu on GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .6A11.4 11.4 0 0 0 8.4 22.82c.57.1.78-.25.78-.55v-2.14c-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.53-.29-5.19-1.27-5.19-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17A10.9 10.9 0 0 1 12 6.1c.97 0 1.95.13 2.86.39C17.04 5 18 5.31 18 5.31c.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.38-2.66 5.34-5.2 5.63.41.35.77 1.03.77 2.08v3.09c0 .3.21.66.79.55A11.4 11.4 0 0 0 12 .6Z" /></svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.facebook.com/share/1HYqJLUHiv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Visit Emmanuel Amedu on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/emmanueleamedu?igsh=cThjcjI5ZjMxbDZk&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Visit Emmanuel Amedu on Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Emmanuel Amedu. Built for dependable digital platforms.</p>
        </div>
      </footer>
    </>
  );
}
