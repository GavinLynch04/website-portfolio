import { experiences, projects, personalInfo } from './data/portfolioData';

function App() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label="Gavin Lynch, home">GL<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Software engineer · San Luis Obispo, CA</p>
          <h1 id="intro-title">Gavin Lynch</h1>
          <p className="intro-copy">I build software and work with data. My interests sit somewhere between machine learning, biology, and making things run a little faster.</p>
          <a className="text-link intro-link" href={personalInfo.github}>GitHub <span aria-hidden="true">↗</span></a>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <span className="section-note">Code & research</span>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.id}>
                <span className="project-number" aria-hidden="true">0{index + 1}</span>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <span className="project-meta">{project.context}</span>
                    {project.links.length > 0 && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a className="text-link" key={link.label} href={link.url} aria-label={`${project.title}: ${link.label}`}>
                            {link.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" aria-labelledby="experience-title">
          <div className="section-heading"><h2 id="experience-title">Experience</h2></div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience" key={experience.company}>
                <p className="experience-period">{experience.period}</p>
                <div>
                  <h3>{experience.company}</h3>
                  <p className="experience-role">{experience.role}</p>
                  <p className="experience-description">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">A little about me</h2>
          <div className="about-copy">
            <p>I studied computer science at Cal Poly, where my research focused on applying machine learning to genetics. I enjoy work that brings software and science together.</p>
            <p>Away from my desk, I’m usually trail running, skiing, or playing chess.</p>
            <p className="education">Cal Poly, San Luis Obispo<br />M.S. Computer Science, 2026 · B.S. Computer Science, 2025</p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch.</h2>
          <a className="email-link" href={`mailto:${personalInfo.email}`}>{personalInfo.email} <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Gavin Lynch</span>
        <div>
          <a href={personalInfo.github}>GitHub <span aria-hidden="true">↗</span></a>
          <a href={personalInfo.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
