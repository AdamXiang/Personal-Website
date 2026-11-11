import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, Star } from 'lucide-react';
import { CATEGORIES, LIVE, PROFILE, REPOS, UI, type Category } from '../data/content';
import { useLang } from '../lang';

function LiveArt({ id }: { id: string }) {
  if (id === 'kitchen-clash') {
    // A pickleball court seen from above, with the "kitchen" (non-volley zone) tinted.
    return (
      <svg viewBox="0 0 320 180" className="live-art" aria-hidden="true">
        <rect width="320" height="180" fill="#1f5fa6" />
        <rect x="30" y="20" width="260" height="140" fill="none" stroke="#fff" strokeWidth="3" />
        <rect x="125" y="20" width="70" height="140" fill="#2f9e6e" stroke="#fff" strokeWidth="3" />
        <line x1="160" y1="12" x2="160" y2="168" stroke="#fff" strokeWidth="4" strokeDasharray="2 5" />
        <line x1="30" y1="90" x2="125" y2="90" stroke="#fff" strokeWidth="3" />
        <line x1="195" y1="90" x2="290" y2="90" stroke="#fff" strokeWidth="3" />
        <path d="M70 130 Q160 -20 244 62" fill="none" stroke="#ffe066" strokeWidth="3" strokeDasharray="1 9" strokeLinecap="round" />
        <circle cx="244" cy="62" r="11" fill="#ffe066" />
        <g fill="#1f5fa6">
          <circle cx="240" cy="59" r="1.8" /><circle cx="247" cy="58" r="1.8" /><circle cx="243" cy="65" r="1.8" /><circle cx="249" cy="65" r="1.8" /><circle cx="238" cy="66" r="1.8" />
        </g>
      </svg>
    );
  }
  // A week of plans: some days have friends attached.
  return (
    <svg viewBox="0 0 320 180" className="live-art" aria-hidden="true">
      <rect width="320" height="180" fill="#f4c542" />
      {[0, 1, 2, 3, 4, 5, 6].map((d) => (
        <g key={d} transform={`translate(${22 + d * 40} 36)`}>
          <rect width="34" height="108" rx="8" fill="#fff8df" />
          <rect width="34" height="16" rx="8" fill="#11241f" />
        </g>
      ))}
      <g>
        <circle cx="79" cy="88" r="9" fill="#e4572e" /><circle cx="79" cy="112" r="9" fill="#1d4b40" />
        <circle cx="159" cy="88" r="9" fill="#2459d6" />
        <circle cx="239" cy="76" r="9" fill="#e4572e" /><circle cx="239" cy="100" r="9" fill="#2459d6" /><circle cx="239" cy="124" r="9" fill="#1d4b40" />
        <circle cx="279" cy="88" r="9" fill="#1d4b40" /><circle cx="279" cy="112" r="9" fill="#e4572e" />
      </g>
    </svg>
  );
}

export function Projects() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState<Category | 'all'>('all');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return REPOS.filter((r) => {
      if (cat !== 'all' && r.cat !== cat) return false;
      if (!needle) return true;
      return [r.repo, r.title.en, r.title.zh, r.desc.en, r.desc.zh, ...r.tech].join(' ').toLowerCase().includes(needle);
    });
  }, [cat, q]);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2>{t(UI.projects.title)}</h2>
        <p className="lead">{t(UI.projects.lead)}</p>

        <h3 className="sub">{t(UI.projects.liveTitle)}</h3>
        <div className="live-grid">
          {LIVE.map((p) => (
            <article key={p.id} className="live-card">
              <LiveArt id={p.id} />
              <div className="live-body">
                <p className="live-kind">{t(p.kind)}</p>
                <h4>{t(p.name)}</h4>
                <p>{t(p.pitch)}</p>
                <ul className="facts">
                  {p.facts.map((f) => (
                    <li key={f.en}>{t(f)}</li>
                  ))}
                </ul>
                <a className="btn btn-solid" href={p.url} target="_blank" rel="noopener noreferrer">
                  {t(p.id === 'kitchen-clash' ? UI.projects.play : UI.projects.open)}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <p className="fine">{t(p.note === 'wake' ? UI.projects.wake : UI.projects.login)}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="sub">{t(UI.projects.outlineTitle)}</h3>
        <div className="outline-tools">
          <div className="chips" role="group" aria-label={t(UI.projects.outlineTitle)}>
            <button className="chip" aria-pressed={cat === 'all'} onClick={() => setCat('all')}>
              {t(UI.projects.all)} <span>{REPOS.length}</span>
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {t(c.label)} <span>{REPOS.filter((r) => r.cat === c.id).length}</span>
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">{t(UI.projects.search)}</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(UI.projects.search)} />
          </label>
        </div>

        <p className="fine" aria-live="polite">
          {filtered.length} {t(UI.projects.count)}
        </p>

        {filtered.length === 0 && <p className="empty">{t(UI.projects.none)}</p>}

        {CATEGORIES.filter((c) => filtered.some((r) => r.cat === c.id)).map((c) => (
          <div key={c.id} className="outline-group">
            <div className="outline-head">
              <h4>{t(c.label)}</h4>
              <p>{t(c.blurb)}</p>
            </div>
            <ul className="outline-list">
              {filtered
                .filter((r) => r.cat === c.id)
                .map((r) => (
                  <li key={r.repo}>
                    <a href={`${PROFILE.socials.github}/${r.repo}`} target="_blank" rel="noopener noreferrer" className="repo">
                      <span className="repo-main">
                        <span className="repo-title">
                          {r.featured && (
                            <Star size={15} className="repo-star" aria-label={lang === 'zh' ? '推薦先看' : 'Start here'} />
                          )}
                          {t(r.title)}
                        </span>
                        <span className="repo-desc">{t(r.desc)}</span>
                        <span className="tags">
                          {r.tech.map((x) => (
                            <span key={x}>{x}</span>
                          ))}
                        </span>
                      </span>
                      <span className="repo-year">{r.year}</span>
                      <ArrowUpRight size={18} className="repo-arrow" aria-hidden="true" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <p className="after">
          <a className="text-link" href={`${PROFILE.socials.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            {t(UI.projects.allRepos)}
          </a>
        </p>
      </div>
    </section>
  );
}
