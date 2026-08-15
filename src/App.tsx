import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  about,
  awards,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  research,
  skills,
  volunteering,
} from './data'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

function fadeUp(reduce: boolean | null, delay = 0) {
  if (reduce) {
    return { initial: false, animate: { opacity: 1 } }
  }
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }
}

function reveal(reduce: boolean | null) {
  if (reduce) {
    return {
      initial: false,
      whileInView: { opacity: 1 },
      viewport: { once: true },
    }
  }
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#top">
            <span className="nav__brand-name">Ioannis Xiradakis</span>
            <span className="nav__brand-meta">Heraklion, Crete</span>
          </a>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <ul id="site-nav" className={`nav__links${menuOpen ? ' open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav__meta-links">
              <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                GitHub
              </a>
              {profile.email ? (
                <a href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>
                  Email
                </a>
              ) : null}
            </li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__pattern" aria-hidden="true" />
          <div className="hero__threads" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero__content">
            <motion.h1 className="hero__name" {...fadeUp(reduce, 0.05)}>
              Ioannis
              <br />
              Xiradakis
            </motion.h1>
            <motion.p className="hero__lede" {...fadeUp(reduce, 0.18)}>
              {profile.summary}
            </motion.p>
            <motion.div className="hero__actions" {...fadeUp(reduce, 0.3)}>
              <a className="btn btn--primary" href="#about">
                {profile.heroCta}
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">About</p>
              <h2 className="section__title">Building correct systems under contention</h2>
              <p className="section__lead">
                {profile.subtitle}. Based in {profile.location} at {profile.affiliation}.
              </p>
            </motion.div>

            <div className="about-grid">
              <motion.div className="about__portrait" {...reveal(reduce)}>
                <img
                  src={profile.avatar}
                  alt={`${profile.name} portrait`}
                  width={480}
                  height={600}
                  loading="lazy"
                />
                <p className="about__meta">
                  {profile.affiliation}
                  <span>{profile.location}</span>
                </p>
              </motion.div>

              <motion.div className="about__blocks" {...reveal(reduce)}>
                <div className="about__block">
                  <h3>System Architecture</h3>
                  <p>{about.architecture}</p>
                </div>
                <div className="about__block">
                  <h3>Research Focus</h3>
                  <p>{about.research}</p>
                </div>
                <div className="about__block">
                  <h3>AI & Infrastructure</h3>
                  <p>{about.ai_systems}</p>
                </div>
                <div className="about__block">
                  <h3>Problem Solving</h3>
                  <p>{about.problem_solving}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="education" className="section section--alt">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Education</p>
              <h2 className="section__title">University of Crete</h2>
              <p className="section__lead">
                From undergraduate excellence to graduate research in software engineering and
                concurrent systems.
              </p>
            </motion.div>
            <motion.div className="edu-row" {...reveal(reduce)}>
              {education.map((item) => (
                <article className="edu-card" key={item.degree}>
                  <p className="edu-card__period">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p className="edu-card__school">{item.school}</p>
                  {item.detail ? <p className="edu-card__detail">{item.detail}</p> : null}
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Experience</p>
              <h2 className="section__title">Research, teaching & industry</h2>
              <p className="section__lead">
                Concurrent systems research at FORTH, teaching at UoC, and applied AI engineering
                internships.
              </p>
            </motion.div>

            <div className="timeline">
              {experience.map((job) => (
                <motion.article className="timeline__item" key={`${job.role}-${job.period}`} {...reveal(reduce)}>
                  <p className="timeline__period">{job.period}</p>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__org">
                      {job.href ? (
                        <a href={job.href} target="_blank" rel="noreferrer">
                          {job.org}
                        </a>
                      ) : (
                        job.org
                      )}
                    </p>
                    <p className="timeline__detail">{job.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div className="volunteer" {...reveal(reduce)}>
              <h3 className="volunteer__title">Volunteering & outreach</h3>
              <div className="volunteer__grid">
                {volunteering.map((item) => (
                  <article key={`${item.role}-${item.period}`}>
                    <h4>{item.role}</h4>
                    <p className="volunteer__meta">
                      {item.org} · {item.period}
                    </p>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="research" className="section section--alt">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Research</p>
              <h2 className="section__title">Publications</h2>
              <p className="section__lead">
                Concurrent algorithms for shared-memory machines — especially priority-based data
                structures that stay fast under contention.
              </p>
            </motion.div>

            <div className="research-list">
              {research.map((paper) => (
                <motion.article className="research-card" key={`${paper.title}-${paper.venue}`} {...reveal(reduce)}>
                  <p className="research-card__venue">
                    {paper.venue}
                    <span> · {paper.date}</span>
                  </p>
                  <h3>{paper.title}</h3>
                  <p className="research-card__authors">{paper.authors}</p>
                  <p className="research-card__desc">{paper.description}</p>
                  <div className="research-card__links">
                    {paper.links.map((link) => (
                      <a
                        key={link.href}
                        className="chip-link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Selected work</p>
              <h2 className="section__title">Projects</h2>
              <p className="section__lead">
                Systems coursework, research demos, and selected engineering projects from GitHub
                and university work.
              </p>
            </motion.div>

            <div className="project-list">
              {projects.map((project) => {
                const inner = (
                  <>
                    <div>
                      <h3 className="project__name">{project.name}</h3>
                      <div className="project__tags">
                        {project.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="project__desc">{project.description}</p>
                    <div>
                      <span className="project__lang">{project.language}</span>
                      {project.url ? (
                        <span className="project__arrow" aria-hidden="true">
                          ↗
                        </span>
                      ) : null}
                    </div>
                  </>
                )

                return project.url ? (
                  <motion.a
                    className="project"
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    {...reveal(reduce)}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div className="project project--static" key={project.name} {...reveal(reduce)}>
                    {inner}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="awards" className="section section--alt">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Recognition</p>
              <h2 className="section__title">Awards & scholarships</h2>
              <p className="section__lead">
                Academic distinctions from the University of Crete and FORTH for sustained
                performance.
              </p>
            </motion.div>

            <div className="award-list">
              {awards.map((award) => (
                <motion.article className="award" key={award.title} {...reveal(reduce)}>
                  <p className="award__period">{award.period}</p>
                  <h3>{award.title}</h3>
                  <p className="award__issuer">{award.issuer}</p>
                  <p>{award.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Toolkit</p>
              <h2 className="section__title">Skills & certifications</h2>
              <p className="section__lead">
                A systems-first stack with growing fluency in AI tooling, containers, and science
                communication.
              </p>
            </motion.div>

            <motion.div className="skills-grid" {...reveal(reduce)}>
              {skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h3>{group.group}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div className="certs" {...reveal(reduce)}>
              <h3>Recent certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
              <div className="langs">
                {languages.map((lang) => (
                  <span key={lang.name}>
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <motion.div {...reveal(reduce)}>
              <p className="section__label">Contact</p>
              <h2 className="section__title">Let’s talk concurrency — or collaboration</h2>
              <p className="section__lead">
                Open to research discussions, collaborations, and conversations about systems that
                need to be both fast and trustworthy.
              </p>
              <div className="contact__actions">
                {profile.email ? (
                  <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                    Email me
                  </a>
                ) : null}
                <a
                  className={`btn ${profile.email ? 'btn--ghost' : 'btn--primary'}`}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact__links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.orcid} target="_blank" rel="noreferrer">
                  ORCID
                </a>
              </div>
            </motion.div>

            <footer className="footer">
              <span>
                © {new Date().getFullYear()} {profile.name}
              </span>
              <span>{profile.affiliation}</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}
