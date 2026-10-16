import './App.css';
import React, { useEffect, useState } from 'react';
import { FaReact, FaNode, FaAws, FaDocker, FaJava, FaPython, FaLock } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si';

const projectStacks = {
  website: {
    label: 'Website',
    link: '/portfolio-stacks/website/index.html',
    projects: [
      {
        title: 'BrandCart Commerce',
        category: 'E-commerce',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        description: 'Built a conversion-focused storefront with product discovery, cart logic, and mobile-first checkout flows designed to reduce friction and increase sales.',
        stack: ['React', 'UI/UX', 'Conversion']
      },
      {
        title: 'OpsBoard Dashboard',
        category: 'SaaS',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        description: 'Designed and shipped a SaaS operations dashboard to centralize KPIs, streamline reporting, and give internal users a single decision-making hub.',
        stack: ['Product Design', 'Dashboard', 'UX']
      },
      {
        title: 'Creator Studio',
        category: 'Portfolio',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        description: 'Created a premium portfolio experience that elevated brand trust, improved content presentation, and drove a more polished digital presence.',
        stack: ['Branding', 'Portfolio', 'Web']
      }
    ]
  },
  infrastructure: {
    label: 'Infrastructure',
    link: '/portfolio-stacks/infrastructure/index.html',
    projects: [
      {
        title: 'Multi-Region Deployment',
        category: 'Cloud',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1558494949cc5c2b7e318b92e7f5e8d9a?auto=format&fit=crop&w=1200&q=80',
        description: 'Automated multi-region deployments with blue/green release controls, rollback safety nets, and monitoring safeguards for production resilience.',
        stack: ['AWS', 'Kubernetes', 'CI/CD']
      },
      {
        title: 'CI/CD Automation',
        category: 'DevOps',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        description: 'Built a repeatable delivery pipeline with build validation, artifact management, and release automation that reduced manual deployment work.',
        stack: ['GitHub Actions', 'Containers', 'Automation']
      },
      {
        title: 'System Reliability Stack',
        category: 'Monitoring',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&q=80',
        description: 'Designed a reliability stack with centralized alerts, health visibility, and operational dashboards that improved incident response time.',
        stack: ['Monitoring', 'Alerting', 'Ops']
      }
    ]
  },
  'cloud-security': {
    label: 'Cloud Security',
    link: '/portfolio-stacks/cloud-security/index.html',
    projects: [
      {
        title: 'Zero Trust Access Model',
        category: 'IAM',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
        description: 'Strengthened cloud access controls with least-privilege policies, identity verification, and audit-friendly enforcement for better internal security posture.',
        stack: ['IAM', 'Zero Trust', 'Security']
      },
      {
        title: 'Cloud Security Hardening',
        category: 'Compliance',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
        description: 'Hardened cloud environments by enforcing policy baselines, reducing risky permissions, and monitoring abnormal access activity across workloads.',
        stack: ['Hardening', 'Policies', 'Audits']
      },
      {
        title: 'Threat Detection Workflow',
        category: 'Threat Monitoring',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        description: 'Built a security monitoring workflow covering suspicious activity, privilege escalation patterns, and faster response playbooks for cloud operations.',
        stack: ['Detection', 'Logging', 'Response']
      }
    ]
  }
} as const;

type StackKey = keyof typeof projectStacks;

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedExperience, setSelectedExperience] = useState<StackKey>('website');
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

    useEffect(() => {
      document.body.style.overflow = navOpen ? 'hidden' : '';
    }, [navOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = (e.currentTarget.getAttribute('href') || '').slice(1);
      const target = document.getElementById(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      setNavOpen(false);
    };

    useEffect(() => {
      setProjectIndex(0);
    }, [selectedExperience]);

    const selectedStack = projectStacks[selectedExperience];
    const activeProject = selectedStack.projects[projectIndex];

    const goToPreviousProject = () => {
      setProjectIndex((prevIndex) => (prevIndex === 0 ? selectedStack.projects.length - 1 : prevIndex - 1));
    };

    const goToNextProject = () => {
      setProjectIndex((prevIndex) => (prevIndex === selectedStack.projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <div className={"app-root" + (lightMode ? ' light-mode' : '')}>
        <nav className={"side-nav" + (navOpen ? ' open' : '')}>
          <div className="nav-header">
            <a href="#home">
              <img src="/images/logo.png" alt="Usman Logo" className="logo-image" />
            </a>
            <h3>Usman</h3>
            <button className="nav-toggle" onClick={() => setLightMode(m => !m)} aria-label="Toggle light/dark mode">
              {lightMode ?  '🌙':'☀️'}
            </button>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleLinkClick} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#experience" onClick={handleLinkClick} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" onClick={handleLinkClick} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#writing" onClick={handleLinkClick} className={activeSection === 'writing' ? 'active' : ''}>Writing</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
          <div className="nav-social">
            <a href="https://www.linkedin.com/in/devpappy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://x.com/pappyloop_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://github.com/usalih" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              G
            </a>
            <a href="mailto:ussalih@outlook.com" aria-label="Email">
              ✉
            </a>
          </div>
        </nav>

        <button className="menu-toggle" onClick={() => setNavOpen(s => !s)} aria-label="Toggle menu">☰</button>

        <main className="main-content">
          <section id="home" className="hero visible">
            <div className="hero-inner">
              <div className="profile">
                <img src="/images/headshot.png" alt="Usman Saliu" className="profile-image" />
                <div className="profile-name">
                  <p>I'm Usman Saliu,</p>
                  <p className="devpappy">also known as <span>"Devpappy"</span> 🔥 in the tech hood</p>
                </div>
              </div>
              <div className="hero-text">
                <p className="hero-kicker">
                  <span className="script-text">hi, I’m</span>
                  <span className="name-script"> Usman</span>
                </p>
                <h1>Building Scalable Systems at the Intersection of Software, Cloud, and Security = My Job.</h1>
                <p>Driven by a growth mindset, I focus on problem-solving and systems thinking to deliver enterprise-grade solutions with global relevance and African grounding.</p>
                <div className="hero-cta">
                  <a href="%PUBLIC_URL%/Resume.pdf" download className="cta-btn cta-primary">
                    📥 Download Resume
                  </a>
                  <a href="mailto:ussalih@yahoo.com" className="cta-btn cta-secondary">
                    ✉️ Contact Me
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-intro">
                <p className="about-highlight">I'm a Software Engineer by training and a <span className="highlight-text">problem-solver by habit</span>.</p>
              </div>
              <div className="about-body">
                <p>I hold a BSc in Software Engineering, and my experience spans <strong>software development, infrastructure, networking, cloud, cybersecurity, and enterprise system delivery</strong>.</p>
                
                <p>I've worked in high-stakes environments where systems must stay online, performance matters, and failure is costly. These experiences shaped how I think about engineering—not as tools or trends, but as <em>clear thinking under pressure, designing for failure, and building systems that work beyond the demo</em>.</p>
                
                <p>I value <span className="core-values">strong fundamentals, disciplined execution, and consistency</span>. My focus is on building <strong className="resilient">resilient, scalable technology</strong> that holds up in real-world conditions.</p>
              </div>
            </div>
          </section>

          <section id="skills">
            <h2>Skills & Technologies</h2>
            
            <div className="tech-carousel-container">
              <div className="tech-carousel" onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                <div className="tech-item">
                  {React.createElement(FaReact as any, { className: "tech-icon" })}
                  <span className="tech-name">React</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiTypescript as any, { className: "tech-icon" })}
                  <span className="tech-name">TypeScript</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiJavascript as any, { className: "tech-icon" })}
                  <span className="tech-name">JavaScript</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaPython as any, { className: "tech-icon" })}
                  <span className="tech-name">Python</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaJava as any, { className: "tech-icon" })}
                  <span className="tech-name">Java</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaNode as any, { className: "tech-icon" })}
                  <span className="tech-name">Node.js</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaAws as any, { className: "tech-icon" })}
                  <span className="tech-name">AWS</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaDocker as any, { className: "tech-icon" })}
                  <span className="tech-name">Docker</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiKubernetes as any, { className: "tech-icon" })}
                  <span className="tech-name">Kubernetes</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiPostgresql as any, { className: "tech-icon" })}
                  <span className="tech-name">PostgreSQL</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiMongodb as any, { className: "tech-icon" })}
                  <span className="tech-name">MongoDB</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaLock as any, { className: "tech-icon" })}
                  <span className="tech-name">Security</span>
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="tech-item">
                  {React.createElement(FaReact as any, { className: "tech-icon" })}
                  <span className="tech-name">React</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiTypescript as any, { className: "tech-icon" })}
                  <span className="tech-name">TypeScript</span>
                </div>
                <div className="tech-item">
                  {React.createElement(SiJavascript as any, { className: "tech-icon" })}
                  <span className="tech-name">JavaScript</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaPython as any, { className: "tech-icon" })}
                  <span className="tech-name">Python</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaJava as any, { className: "tech-icon" })}
                  <span className="tech-name">Java</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaNode as any, { className: "tech-icon" })}
                  <span className="tech-name">Node.js</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaAws as any, { className: "tech-icon" })}
                  <span className="tech-name">AWS</span>
                </div>
                <div className="tech-item">
                  {React.createElement(FaDocker as any, { className: "tech-icon" })}
                  <span className="tech-name">Docker</span>
                </div>
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>Software Engineering</h3>
                <p>Proficient in building robust software system with a focus on efficiency and maintainability.</p>
              </div>
              <div className="skill-card">
                <h3>Cloud Computing (AWS)</h3>
                <p>Expertise in deploying and managing scalable cloud infrastructures and pricing structures.</p>
              </div>
              <div className="skill-card">
                <h3>Cybersecurity Awareness</h3>
                <p>Committed to secure practices in development and operations.</p>
              </div>
              <div className="skill-card">
                <h3>Infrastructure & System Design</h3>
                <p>Designing holistic networking to infrastructure systems for long-term reliability and growth adoption.</p>
              </div>
            </div>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <p>My professional path includes hands-on work with enterprise solutions, where I've driven solution-oriented projects that enhance scalability and security. Highlights include optimizing cloud deployments and collaborating on cross-functional teams to deliver impactful results.</p>

            <div className="experience-container">
              <div className="experience-header">
                <div className="experience-dropdown">
                  <label>Select Category: </label>
                  <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value as StackKey)}>
                    <option value="website">Website</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="cloud-security">Cloud Security</option>
                  </select>
                </div>

                <a className="view-more-link" href={selectedStack.link} target="_blank" rel="noreferrer">
                  View more projects <span>→</span>
                </a>
              </div>

              <div className="project-preview">
                <button className="carousel-btn prev" type="button" onClick={goToPreviousProject} aria-label="Previous project">
                  ←
                </button>

                <div className="project-preview-card">
                  <div
                    className="project-preview-image"
                    style={{ backgroundImage: `url(${activeProject.image})` }}
                    aria-label={activeProject.title}
                  />

                  <div className="project-preview-body">
                    <div className="preview-topline">
                      <span className="preview-tag">{activeProject.category}</span>
                      <span className="preview-year">{activeProject.year}</span>
                    </div>

                    <h3>{activeProject.title}</h3>
                    <p>{activeProject.description}</p>

                    <div className="preview-stack">
                      {activeProject.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="carousel-btn next" type="button" onClick={goToNextProject} aria-label="Next project">
                  →
                </button>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <div className="projects">
              <div className="project-card">
                <h3>Cloud Migration Tool</h3>
                <p>Developed a tool to streamline AWS migrations, reducing downtime by 40% and emphasizing security best practices.</p>
              </div>
              <div className="project-card">
                <h3>Scalable Web App</h3>
                <p>Built a responsive application handling high traffic, focusing on user impact and system resilience.</p>
              </div>
            </div>
          </section>

          <section id="writing">
            <h2>Writing / Insights</h2>
            <p>Sharing thoughts on tech evolution, career growth, and systems design. Check out my latest articles on cloud strategies and cybersecurity trends.</p>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-shell">
              <div className="contact-copy">
                <p className="contact-kicker">GOOD THINGS START WITH A HELLO</p>
                <h2>Have something in mind? Let&apos;s make it happen.</h2>

                <a href="mailto:ussalih@outlook.com" className="contact-email">
                  ussalih@outlook.com <span aria-hidden="true">↗</span>
                </a>

                <div className="contact-socials">
                  <a href="https://linkedin.com/in/devpappy" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/usalih" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://x.com/pappyloop_" target="_blank" rel="noreferrer">X</a>
                </div>

                <div className="contact-signature">Let&apos;s connect.</div>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="field-row double">
                  <label>
                    <span>Your name</span>
                    <input type="text" placeholder="Usman Usman" aria-label="Your name" />
                  </label>

                  <label>
                    <span>Email address</span>
                    <input type="email" placeholder="info@usmansaliu.com" aria-label="Email address" />
                  </label>
                </div>

                <label>
                  <span>Subject (optional)</span>
                  <input type="text" placeholder="Subject" aria-label="Subject (optional)" />
                </label>

                <label>
                  <span>What are you thinking?</span>
                  <textarea rows={5} placeholder="Write your message here..." aria-label="What are you thinking?" />
                </label>

                <button type="submit" className="send-btn">
                  Boom <span aria-hidden="true">↗</span>
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    );
  }

  export default App;