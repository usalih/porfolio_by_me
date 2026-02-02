import './App.css';
import React, { useEffect, useState } from 'react';
import { FaReact, FaNode, FaAws, FaDocker, FaJava, FaPython, FaLock } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

    return (
      <div className={"app-root" + (lightMode ? ' light-mode' : '')}>
        <nav className={"side-nav" + (navOpen ? ' open' : '')}>
          <div className="nav-header">
            <div className="logo">US</div>
            <h3>Usman</h3>
            <button className="nav-toggle" onClick={() => setLightMode(m => !m)} aria-label="Toggle light/dark mode">
              {lightMode ? '☀️' : '🌙'}
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
            <a href="https://linkedin.com/in/usmansaliu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              ⚙
            </a>
            <a href="mailto:usman@example.com" aria-label="Email">
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
                <h1>Building Scalable Systems at the Intersection of Software, Cloud, and Security = My Job.</h1>
                <p>Driven by a growth mindset, I focus on problem-solving and systems thinking to deliver enterprise-grade solutions with global relevance and African grounding.</p>
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
                  <FaReact className="tech-icon" />
                  <span className="tech-name">React</span>
                </div>
                <div className="tech-item">
                  <SiTypescript className="tech-icon" />
                  <span className="tech-name">TypeScript</span>
                </div>
                <div className="tech-item">
                  <SiJavascript className="tech-icon" />
                  <span className="tech-name">JavaScript</span>
                </div>
                <div className="tech-item">
                  <FaPython className="tech-icon" />
                  <span className="tech-name">Python</span>
                </div>
                <div className="tech-item">
                  <FaJava className="tech-icon" />
                  <span className="tech-name">Java</span>
                </div>
                <div className="tech-item">
                  <FaNode className="tech-icon" />
                  <span className="tech-name">Node.js</span>
                </div>
                <div className="tech-item">
                  <FaAws className="tech-icon" />
                  <span className="tech-name">AWS</span>
                </div>
                <div className="tech-item">
                  <FaDocker className="tech-icon" />
                  <span className="tech-name">Docker</span>
                </div>
                <div className="tech-item">
                  <SiKubernetes className="tech-icon" />
                  <span className="tech-name">Kubernetes</span>
                </div>
                <div className="tech-item">
                  <SiPostgresql className="tech-icon" />
                  <span className="tech-name">PostgreSQL</span>
                </div>
                <div className="tech-item">
                  <SiMongodb className="tech-icon" />
                  <span className="tech-name">MongoDB</span>
                </div>
                <div className="tech-item">
                  <FaLock className="tech-icon" />
                  <span className="tech-name">Security</span>
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="tech-item">
                  <FaReact className="tech-icon" />
                  <span className="tech-name">React</span>
                </div>
                <div className="tech-item">
                  <SiTypescript className="tech-icon" />
                  <span className="tech-name">TypeScript</span>
                </div>
                <div className="tech-item">
                  <SiJavascript className="tech-icon" />
                  <span className="tech-name">JavaScript</span>
                </div>
                <div className="tech-item">
                  <FaPython className="tech-icon" />
                  <span className="tech-name">Python</span>
                </div>
                <div className="tech-item">
                  <FaJava className="tech-icon" />
                  <span className="tech-name">Java</span>
                </div>
                <div className="tech-item">
                  <FaNode className="tech-icon" />
                  <span className="tech-name">Node.js</span>
                </div>
                <div className="tech-item">
                  <FaAws className="tech-icon" />
                  <span className="tech-name">AWS</span>
                </div>
                <div className="tech-item">
                  <FaDocker className="tech-icon" />
                  <span className="tech-name">Docker</span>
                </div>
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>Software Engineering</h3>
                <p>Proficient in building robust applications with a focus on efficiency and maintainability.</p>
              </div>
              <div className="skill-card">
                <h3>Cloud Computing (AWS)</h3>
                <p>Expertise in deploying and managing scalable cloud infrastructures.</p>
              </div>
              <div className="skill-card">
                <h3>Cybersecurity Awareness</h3>
                <p>Committed to secure practices in development and operations.</p>
              </div>
              <div className="skill-card">
                <h3>Infrastructure & Systems Thinking</h3>
                <p>Designing holistic systems for long-term reliability and growth.</p>
              </div>
            </div>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <p>My professional path includes hands-on work with enterprise solutions, where I've driven solution-oriented projects that enhance scalability and security. Highlights include optimizing cloud deployments and collaborating on cross-functional teams to deliver impactful results.</p>
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

          <section id="contact">
            <h2>Contact</h2>
            <p>Let's connect for opportunities in software and cloud engineering.</p>
            <a href="https://linkedin.com/in/usmansaliu">LinkedIn</a> | <a href="mailto:usman@example.com">Email</a>
          </section>
        </main>
      </div>
    );
  }

  export default App;