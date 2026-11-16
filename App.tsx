import { useState } from 'react';
import { ArrowUpRight, Check, Copy, GraduationCap, Download, Github, Instagram, Linkedin, Mail, PenLine } from 'lucide-react';
import { ABOUT, BEYOND, CERTS, CLUBS, EDUCATION, EXPERIENCE, PROFILE, PROGRAMS, SKILLS, UI } from './data/content';
import { jobState } from './dates';
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
  // Open the first role that has details (an upcoming role has none yet).
  const [openId, setOpenId] = useState<string | null>(EXPERIENCE.find((j) => j.bullets.length > 0)?.id ?? null);
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2>{t(UI.work.title)}</h2>
        <p className="lead">{t(UI.work.lead)}</p>
        <ol className="jobs">
          {EXPERIENCE.map((job) => {
            const open = openId === job.id;
            const state = jobState(job);
            const hasDetails = job.bullets.length > 0;
            return (
              <li key={job.id} className={`job job-${state}`}>
                <p className="job-period">
                  {state === 'upcoming' && job.upcomingPeriod ? t(job.upcomingPeriod) : job.period}
                  {state === 'current' && <span className="job-now">{t(UI.work.now)}</span>}
                  {state === 'upcoming' && <span className="job-now job-soon">{t(UI.work.soon)}</span>}
                </p>
                <div className="job-body">
                  <h3>
                    {t(job.role)} <span className="job-at">{t(job.company)}</span>
                  </h3>
                  <p className="job-headline">{t(job.headline)}</p>
                  {open && hasDetails && (
                    <ul className="job-bullets" id={`job-${job.id}`}>
                      {job.bullets.map((b) => (
                        <li key={b.en}>{t(b)}</li>
                      ))}
                    </ul>
                  )}
                  {hasDetails && (
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
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

// An organisation's logo loaded from its own site. If it cannot load, its initials show instead.
function Logo({ src, initials, className }: { src?: string; initials: string; className: string }) {
  const [failed, setFailed] = useState(!src);
  return (
    <span className={className} aria-hidden="true">
      {failed ? (
        <span className="logo-initials">{initials}</span>
      ) : (
        <img src={src} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      )}
    </span>
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
            <ul className="cert-badges">
              {CERTS.filter((c) => c.featured).map((c) => (
                <li key={c.name} className={`cert cert-${c.issuer.toLowerCase().split(' ')[0]}`}>
                  <Logo src={c.icon} initials={c.issuer.split(' ').map((w) => w[0]).join('').slice(0, 3)} className="cert-logo" />
                  <span>
                    <strong>{c.name}</strong>
                    <span>{c.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="plain">
              {CERTS.filter((c) => !c.featured).map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
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

        <h3 className="sub">{t(UI.about.beyond)}</h3>
        <ul className="beyond">
          {BEYOND.map((b) => (
            <li key={b.id} className={`beyond-card beyond-${b.id}`}>
              <p className="beyond-big">
                {b.id === 'teacher' && <GraduationCap size={30} aria-hidden="true" />}
                <span>{b.big}</span>
              </p>
              <p className="beyond-unit">{t(b.unit)}</p>
              <h4>{t(b.title)}</h4>
              {b.period && <p className="beyond-period">{b.period}</p>}
              <p>{t(b.note)}</p>
            </li>
          ))}
        </ul>

        <h3 className="sub">{t(UI.about.programs)}</h3>
        <ul className="programs">
          {PROGRAMS.map((p) => (
            <li key={p.id}>
              <a className="program" href={p.url} target="_blank" rel="noopener noreferrer">
                <Logo src={p.logo} initials={p.initials} className={`program-logo${p.logoStyle ? ` program-logo-${p.logoStyle}` : ''}`} />
                <span className="program-body">
                  <span className="program-top">
                    <span className="program-year">{p.year}</span>
                    <span className="program-detail">{t(p.detail)}</span>
                  </span>
                  <span className="program-name">{t(p.name)}</span>
                  {p.note && <span className="program-note">{t(p.note)}</span>}
                </span>
                <ArrowUpRight size={18} className="program-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <h4 className="clubs-title">{t(UI.about.clubs)}</h4>
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
