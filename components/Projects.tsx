import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, Star } from 'lucide-react';
import { CATEGORIES, LIVE, PROFILE, REPOS, UI, type Category } from '../data/content';
import { useLang } from '../lang';

function LiveArt({ id }: { id: string }) {
  if (id === 'kitchen-clash') {
    // A pickleball court from above; the ball keeps crossing the net.
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="show-art" aria-hidden="true">
        <rect width="400" height="300" fill="#1a4f8f" />
        <rect x="40" y="50" width="320" height="200" fill="#2467b3" stroke="#fff" strokeWidth="4" />
        <rect x="155" y="50" width="90" height="200" fill="#2f9e6e" stroke="#fff" strokeWidth="4" />
        <line x1="200" y1="36" x2="200" y2="264" stroke="#fff" strokeWidth="5" strokeDasharray="3 6" />
        <line x1="40" y1="150" x2="155" y2="150" stroke="#fff" strokeWidth="4" />
        <line x1="245" y1="150" x2="360" y2="150" stroke="#fff" strokeWidth="4" />
        <path id="rally" d="M80 215 Q200 -40 318 96 Q200 150 80 215" fill="none" />
        <g className="art-ball">
          <circle r="14" fill="#ffe066" />
          <circle cx="-5" cy="-4" r="2.2" fill="#1a4f8f" /><circle cx="4" cy="-5" r="2.2" fill="#1a4f8f" /><circle cx="0" cy="4" r="2.2" fill="#1a4f8f" /><circle cx="7" cy="4" r="2.2" fill="#1a4f8f" /><circle cx="-7" cy="5" r="2.2" fill="#1a4f8f" />
          <animateMotion dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1">
            <mpath href="#rally" />
          </animateMotion>
        </g>
        <rect className="art-paddle" x="52" y="196" width="16" height="44" rx="8" fill="#ff7a59" />
        <rect className="art-paddle art-paddle-2" x="332" y="72" width="16" height="44" rx="8" fill="#ffe066" />
      </svg>
    );
  }
  if (id === 'feng') {
    // A week of plans: friends pile onto the days they are in for.
    const dots: [number, number, string, number][] = [
      [1, 0, '#e4572e', 0], [1, 1, '#1d4b40', 0.5], [3, 0, '#2459d6', 1],
      [5, 0, '#e4572e', 1.4], [5, 1, '#2459d6', 1.8], [5, 2, '#1d4b40', 2.2], [5, 3, '#e4572e', 2.6],
      [6, 0, '#1d4b40', 3], [6, 1, '#2459d6', 3.4],
    ];
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="show-art" aria-hidden="true">
        <rect width="400" height="300" fill="#f4c542" />
        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
          <g key={d} transform={`translate(${32 + d * 49} 50)`}>
            <rect width="42" height="200" rx="10" fill="#fff8df" />
            <rect width="42" height="22" rx="10" fill="#11241f" />
          </g>
        ))}
        {dots.map(([d, n, fill, delay], i) => (
          <circle key={i} className="art-pop" style={{ animationDelay: `${delay}s` }} cx={53 + d * 49} cy={228 - n * 34} r="13" fill={fill} />
        ))}
      </svg>
    );
  }
  // A stamp book: rows of things to do, and the stamp comes down on one.
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="show-art" aria-hidden="true">
      <rect width="400" height="300" fill="#e4ece8" />
      {[0, 1, 2, 3].map((row) => (
        <g key={row} transform={`translate(52 ${48 + row * 56})`}>
          <circle cx="22" cy="22" r="20" fill="none" stroke="#56686d" strokeWidth="2" strokeDasharray="4 5" />
          <rect x="60" y="8" width={[190, 150, 220, 170][row]} height="10" rx="5" fill="#14252b" />
          <rect x="60" y="28" width={[120, 180, 140, 100][row]} height="7" rx="3.5" fill="#9bb0ab" />
        </g>
      ))}
      <rect x="112" y="56" width="60" height="10" rx="5" fill="#0b7a63" />
      <rect x="112" y="168" width="80" height="10" rx="5" fill="#2c47cf" />
      {[0, 2].map((row, i) => (
        <g key={row} transform={`translate(74 ${70 + row * 56})`}>
          <g className="art-stamp" style={{ animationDelay: `${0.6 + i * 1.6}s` }}>
            <circle r="21" fill="none" stroke="#cf2257" strokeWidth="3" />
            <circle r="16" fill="none" stroke="#cf2257" strokeWidth="1.5" />
            <text textAnchor="middle" y="5" fontSize="13" fontWeight="700" fill="#cf2257">完成</text>
          </g>
        </g>
      ))}
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

  const featured = REPOS.filter((r) => r.featured);
  const catLabel = (id: Category) => t(CATEGORIES.find((c) => c.id === id)!.label);

  return (
    <section id="projects" className="section works">
      <div className="wrap">
        <h2 className="works-title">{t(UI.projects.title)}</h2>
        <p className="lead">{t(UI.projects.lead)}</p>
      </div>

      <div className="wrap shows">
        {LIVE.map((p, i) => (
          <article key={p.id} className={`show show-${p.id}`}>
            <a className="show-visual" href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
              <LiveArt id={p.id} />
            </a>
            <div className="show-body">
              <p className="show-kind">
                <span className="show-num">{String(i + 1).padStart(2, '0')}</span>
                {t(p.kind)}
              </p>
              <h3>{t(p.name)}</h3>
              <p className="show-pitch">{t(p.pitch)}</p>
              <ul className="show-facts">
                {p.facts.map((f) => (
                  <li key={f.en}>{t(f)}</li>
                ))}
              </ul>
              <a className="btn show-cta" href={p.url} target="_blank" rel="noopener noreferrer">
                {t(p.cta)}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <p className="show-note">{t(p.note)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="wrap">
        <div className="feat-head">
          <h3>{t(UI.projects.featuredTitle)}</h3>
          <p>{t(UI.projects.featuredLead)}</p>
        </div>
        <ul className="feat-grid">
          {featured.map((r) => (
            <li key={r.repo}>
              <a className={`feat feat-${r.cat}`} href={`${PROFILE.socials.github}/${r.repo}`} target="_blank" rel="noopener noreferrer">
                <span className="feat-cat">{catLabel(r.cat)}</span>
                <span className="feat-title">{t(r.title)}</span>
                <span className="feat-desc">{t(r.desc)}</span>
                <span className="tags">
                  {r.tech.slice(0, 4).map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </span>
                <span className="feat-link">
                  {t(UI.projects.code)} <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>

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
