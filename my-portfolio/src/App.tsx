import './App.css';
import React, { useEffect, useState } from 'react';
import { FaReact, FaNode, FaAws, FaDocker, FaJava, FaPython, FaLock } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedExperience, setSelectedExperience] = useState('fullstack');

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
              ⚙
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
              <div className="experience-dropdown">
                <label>Select Category: </label>
                <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="cloud">Cloud & Devops</option>
                  <option value="security">Securit</option>
                  <option value="backend">Backend Systems</option>
                  <option value="deployment">Infrastructure Deployment</option>
                </select>
              </div>

              <div className="experience-timeline">
                {selectedExperience === 'fullstack' && (
                  <>
                    <div className="experience-tile">
                      <div className="tile-year">2023-Present</div>
                      <div className="tile-content">
                        <h4>IT Infrastructure & System Engineer</h4>
                        <p className="company-name">SIDMACH TECHNOLOGY</p>
                        <p className="date-range">Onsite • February 2023 – Present</p>
                        <p>Managing enterprise IT infrastructure, system administration, and providing technical support. Overseeing cloud deployments and optimizing network infrastructure.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2022</div>
                      <div className="tile-content">
                        <h4>Software Engineer</h4>
                        <p className="company-name">SMARTBUKITES</p>
                        <p className="date-range">Remote • February 2022 – December 2022</p>
                        <p>Developed full-stack web applications using React and Node.js. Implemented responsive interfaces and backend APIs for scalable solutions.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2020</div>
                      <div className="tile-content">
                        <h4>Website Administrator</h4>
                        <p className="company-name">DINAMICA TECHNOLOGY LIMITED</p>
                        <p className="date-range">Remote • January 2020 – June 2021</p>
                        <p>Maintained and updated website infrastructure. Managed content management systems and ensured optimal site performance and security.</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedExperience === 'cloud' && (
                  <>
                    <div className="experience-tile">
                      <div className="tile-year"> 2023-Present </div>
                      <div className="tile-content">
                        <h4>Infrastructure Excellence</h4>
                        <p className="company-name">SIDMACH TECHNOLOGY</p>
                        <p className="date-range">Onsite • February 2023 – Present</p>
                        <p>Architecting cloud infrastructure on AWS. Implemented Kubernetes orchestration and containerization strategies for enterprise applications.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2022</div>
                      <div className="tile-content">
                        <h4>Cloud & DevOps Implementation</h4>
                        <p className="company-name">SMARTBUKITES</p>
                        <p className="date-range">Remote • February 2022 – December 2022</p>
                        <p>Deployed applications on AWS. Implemented CI/CD pipelines and container management for rapid deployment cycles.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2021</div>
                      <div className="tile-content">
                        <h4>Web Infrastructure</h4>
                        <p className="company-name">DINAMICA TECHNOLOGY LIMITED</p>
                        <p className="date-range">Remote • January 2020 – June 2021</p>
                        <p>Managed web server infrastructure and hosting environments. Optimized performance and managed deployments.</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedExperience === 'security' && (
                  <>
                    <div className="experience-tile">
                      <div className="tile-year">2023-Present</div>
                      <div className="tile-content">
                        <h4>Enterprise Security & Compliance</h4>
                        <p className="company-name">SIDMACH TECHNOLOGY</p>
                        <p className="date-range">Onsite • February 2023 – Present</p>
                        <p>Led security initiatives for enterprise infrastructure. Implemented zero-trust architecture and advanced threat detection systems.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2022</div>
                      <div className="tile-content">
                        <h4>Application Security</h4>
                        <p className="company-name">SMARTBUKITES</p>
                        <p className="date-range">Remote • February 2022 – December 2022</p>
                        <p>Implemented secure coding practices and authentication systems. Integrated security into development pipelines.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2021</div>
                      <div className="tile-content">
                        <h4>Web Security Fundamentals</h4>
                        <p className="company-name">DINAMICA TECHNOLOGY LIMITED</p>
                        <p className="date-range">Remote • January 2020 – June 2021</p>
                        <p>Implemented SSL certificates and security protocols. Protected web applications from common vulnerabilities.</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedExperience === 'backend' && (
                  <>
                    <div className="experience-tile">
                      <div className="tile-year">2023-Present</div>
                      <div className="tile-content">
                        <h4>Advanced System Architecture</h4>
                        <p className="company-name">SIDMACH TECHNOLOGY</p>
                        <p className="date-range">Onsite • February 2023 – Present</p>
                        <p>Architected scalable backend systems handling enterprise workloads. Optimized databases and implemented advanced caching strategies.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2022</div>
                      <div className="tile-content">
                        <h4>API Development & Microservices</h4>
                        <p className="company-name">SMARTBUKITES</p>
                        <p className="date-range">Remote • February 2022 – December 2022</p>
                        <p>Built RESTful APIs and microservices using Node.js. Designed database schemas for PostgreSQL and MongoDB applications.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2020</div>
                      <div className="tile-content">
                        <h4>Backend Fundamentals</h4>
                        <p className="company-name">DINAMICA TECHNOLOGY LIMITED</p>
                        <p className="date-range">Remote • January 2020 – June 2021</p>
                        <p>Developed backend systems for website functionality. Learned server-side technologies and database management.</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedExperience === 'deployment' && (
                  <>
                    <div className="experience-tile">
                      <div className="tile-year">2020-2023</div>
                      <div className="tile-content">
                        <h4>Hardware & Software Deployment</h4>
                        <p className="company-name">ENTERPRISE SOLUTIONS</p>
                        <p className="date-range">Ongoing • 2020 – 2023</p>
                        <p>Executed numerous hardware and software deployment projects across enterprise environments. Managed imaging, configuration management, and system provisioning for organizational infrastructure scaling.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2022</div>
                      <div className="tile-content">
                        <h4>Starlink & Access Point Deployment</h4>
                        <p className="company-name">MULTI-SITE DEPLOYMENT</p>
                        <p className="date-range">Onsite • 2021 – 2022</p>
                        <p>Installed Starlink satellite internet and wireless access points across WAEC sites and multiple organizations. Configured network connectivity for seamless internet access and managed point-to-point links.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2021</div>
                      <div className="tile-content">
                        <h4>Sophos Firewall Installation & Configuration</h4>
                        <p className="company-name">ENTERPRISE SECURITY DEPLOYMENT</p>
                        <p className="date-range">Onsite • 2021</p>
                        <p>Deployed and configured Sophos firewall solutions across multiple sites including NYSC facilities. Implemented advanced threat protection and network segmentation for enhanced security posture.</p>
                      </div>
                    </div>
                    <div className="experience-tile">
                      <div className="tile-year">2020</div>
                      <div className="tile-content">
                        <h4>NYSC ITC Building & Network Restructuring</h4>
                        <p className="company-name">NYSC INFRASTRUCTURE PROJECT</p>
                        <p className="date-range">Onsite • 2020</p>
                        <p>Led comprehensive restructuring of NYSC ITC building network infrastructure. Upgraded cabling, implemented modern networking standards, and optimized system architecture for institutional needs.</p>
                      </div>
                    </div>
                  </>
                )}
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