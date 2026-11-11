import { useState } from 'react';
import { Check, Copy, Download, Github, Instagram, Linkedin, Mail, PenLine } from 'lucide-react';
import { ABOUT, CERTS, CLUBS, EDUCATION, EXPERIENCE, PROFILE, SKILLS, UI } from './data/content';
import { LangProvider, useLang } from './lang';
import { Lineage } from './components/Lineage';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { AIChat } from './components/AIChat';

function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="nav">
      <a className="skip" href="#main">
        {lang === 'zh' ? '跳到主要內容' : 'Skip to content'}
      </a>
      <div className="nav-inner">
        <a className="brand" href="#top">
          Adam Chang
        </a>
        <nav aria-label={lang === 'zh' ? '主選單' : 'Main'}>
          <a href="#projects">{t(UI.nav.projects)}</a>
          <a href="#work">{t(UI.nav.work)}</a>
          <a href="#journey">{t(UI.nav.journey)}</a>
          <a href="#about">{t(UI.nav.about)}</a>
        </nav>
        <div className="nav-actions">
          <button
            className="lang"
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            aria-label={lang === 'en' ? '切換為中文' : 'Switch to English'}
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <a className="btn btn-gold btn-small" href={PROFILE.resumeUrl} download>
            <Download size={16} aria-hidden="true" />
            <span>{t(UI.nav.resume)}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Work() {
  const { t } = useLang();
  const [openId, setOpenId] = useState<string | null>(EXPERIENCE[0].id);
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2>{t(UI.work.title)}</h2>
        <p className="lead">{t(UI.work.lead)}</p>
        <ol className="jobs">
          {EXPERIENCE.map((job) => {
            const open = openId === job.id;
            return (
              <li key={job.id} className="job">
                <p className="job-period">
                  {job.period}
                  {job.current && <span className="job-now">{t(UI.work.now)}</span>}
                </p>
                <div className="job-body">
                  <h3>
                    {t(job.role)} <span className="job-at">{t(job.company)}</span>
                  </h3>
                  <p className="job-headline">{t(job.headline)}</p>
                  {open && (
                    <ul className="job-bullets" id={`job-${job.id}`}>
                      {job.bullets.map((b) => (
                        <li key={b.en}>{t(b)}</li>
                      ))}
                    </ul>
                  )}
                  <div className="job-foot">
                    <span className="tags">
                      {job.tech.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </span>
                    <button className="text-link" aria-expanded={open} aria-controls={`job-${job.id}`} onClick={() => setOpenId(open ? null : job.id)}>
                      {t(open ? UI.work.less : UI.work.more)}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  const [fallback, setFallback] = useState(false);
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <h2>{t(UI.about.title)}</h2>
        <div className="about-grid">
          <div className="about-text">
            <img
              className="portrait"
              src={fallback ? './adam-flowers.webp' : PROFILE.avatarUrl}
              onError={() => setFallback(true)}
              alt={PROFILE.name}
              width={160}
              height={160}
              referrerPolicy="no-referrer"
            />
            {ABOUT.map((p) => (
              <p key={p.en}>{t(p)}</p>
            ))}
          </div>
          <div className="about-facts">
            <h3>{t(UI.about.education)}</h3>
            <ul className="plain">
              {EDUCATION.map((e) => (
                <li key={e.period}>
                  <strong>{t(e.degree)}</strong>
                  <span>
                    {t(e.school)}, {e.period}
                  </span>
                </li>
              ))}
            </ul>
            <h3>{t(UI.about.certs)}</h3>
            <ul className="plain">
              {CERTS.map((c) => (
                <li key={c}>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Lineage />

        <h3 className="sub">{t(UI.about.skills)}</h3>
        <dl className="skills">
          {SKILLS.map((s) => (
            <div key={s.group.en}>
              <dt>{t(s.group)}</dt>
              <dd className="tags">
                {s.items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="sub">{t(UI.about.clubs)}</h3>
        <ul className="clubs">
          {CLUBS.map((c) => (
            <li key={c.org.en}>
              <p className="club-period">{c.period}</p>
              <strong>
                {t(c.role)}, {t(c.org)}
              </strong>
              <p>{t(c.note)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };
  return (
    <footer id="contact" className="contact">
      <div className="wrap contact-grid">
        <img className="contact-photo" src="./adam-flowers.webp" alt="" width={220} height={220} loading="lazy" />
        <div>
          <h2>{t(UI.contact.title)}</h2>
          <p className="lead">{t(UI.contact.lead)}</p>
          <p className="contact-email">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </p>
          <div className="hero-actions">
            <button className="btn btn-ghost" onClick={copy}>
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              <span aria-live="polite">{t(copied ? UI.contact.copied : UI.contact.copy)}</span>
            </button>
            <a className="btn btn-solid" href={PROFILE.resumeUrl} download>
              <Download size={18} aria-hidden="true" />
              {t(UI.nav.resume)}
            </a>
          </div>
          <p className="fine">{t(UI.contact.resumeNote)}</p>
          <ul className="socials">
            <li>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={PROFILE.socials.medium} target="_blank" rel="noopener noreferrer">
                <PenLine size={18} aria-hidden="true" /> Medium
              </a>
            </li>
            <li>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={18} aria-hidden="true" /> Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${PROFILE.email}`}>
                <Mail size={18} aria-hidden="true" /> Email
              </a>
            </li>
          </ul>
          <p className="fine">
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <Work />
        <Journey />
        <About />
      </main>
      <Contact />
      <AIChat />
    </LangProvider>
  );
}
