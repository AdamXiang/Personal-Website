import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CHAPTERS, DIARY, DIARY_START, PROFILE, UI, type Photo } from '../data/content';
import { useLang } from '../lang';

const src = (file: string, thumb = false) => `./journey/${file}${thumb ? '-t' : ''}.webp`;

function level(n: number) {
  if (n === 0) return 0;
  if (n <= 3) return 1;
  if (n <= 9) return 2;
  if (n <= 15) return 3;
  return 4;
}

export function Journey() {
  const { t, lang } = useLang();
  const photos = useMemo<Photo[]>(() => CHAPTERS.flatMap((c) => c.photos), []);
  const firstPhotoOfDay = useMemo(() => {
    const m = new Map<number, number>();
    photos.forEach((p, i) => {
      if (!m.has(p.day)) m.set(p.day, i);
    });
    return m;
  }, [photos]);

  const [hoverDay, setHoverDay] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dateOf = (day: number) => {
    const d = new Date(`${DIARY_START}T00:00:00`);
    d.setDate(d.getDate() + day - 1);
    return d.toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };
  const dayLabel = (day: number) => `${t(UI.journey.day)} ${day}${t(UI.journey.dayUnit)}`;
  const describe = (day: number) => {
    const n = DIARY[day - 1];
    return `${dayLabel(day)}, ${dateOf(day)}: ${n === 0 ? t(UI.journey.noEntry) : `${n} ${t(UI.journey.photos)}`}`;
  };

  // Offset so the grid's rows are weekdays (Monday first), like a contribution graph.
  const offset = (new Date(`${DIARY_START}T00:00:00`).getDay() + 6) % 7;

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open !== null && !dlg.open) dlg.showModal();
    if (open === null && dlg.open) dlg.close();
  }, [open]);

  const step = (delta: number) => setOpen((i) => (i === null ? i : (i + delta + photos.length) % photos.length));

  return (
    <section id="journey" className="section journey">
      <div className="wrap">
        <h2>{t(UI.journey.title)}</h2>
        <p className="lead">{t(UI.journey.lead)}</p>

        <dl className="journey-stats">
          {UI.journey.stats.map((s) => (
            <div key={s.n}>
              <dt>{s.n}</dt>
              <dd>{t(s.label)}</dd>
            </div>
          ))}
        </dl>

        <div className="heat">
          <h3>{t(UI.journey.heatTitle)}</h3>
          <p>{t(UI.journey.heatLead)}</p>
          <div className="heat-scroll">
            <div className="heat-grid" onMouseLeave={() => setHoverDay(null)}>
              {Array.from({ length: offset }, (_, i) => (
                <span key={`pad-${i}`} className="heat-pad" aria-hidden="true" />
              ))}
              {DIARY.map((n, i) => {
                const day = i + 1;
                const photoIndex = firstPhotoOfDay.get(day);
                const cls = `heat-cell l${level(n)}${photoIndex !== undefined ? ' has-photo' : ''}`;
                return photoIndex !== undefined ? (
                  <button
                    key={day}
                    className={cls}
                    aria-label={describe(day)}
                    onMouseEnter={() => setHoverDay(day)}
                    onFocus={() => setHoverDay(day)}
                    onClick={() => setOpen(photoIndex)}
                  />
                ) : (
                  <span key={day} className={cls} title={describe(day)} onMouseEnter={() => setHoverDay(day)} onClick={() => setHoverDay(day)} />
                );
              })}
            </div>
          </div>
          <div className="heat-foot">
            <p className="heat-readout" aria-live="polite">
              {hoverDay ? describe(hoverDay) : t(UI.journey.hover)}
            </p>
            <p className="heat-legend" aria-hidden="true">
              {t(UI.journey.fewer)}
              <span className="heat-cell l0" />
              <span className="heat-cell l1" />
              <span className="heat-cell l2" />
              <span className="heat-cell l3" />
              <span className="heat-cell l4" />
              {t(UI.journey.more)}
            </p>
          </div>
        </div>

        <ol className="chapters">
          {CHAPTERS.map((c) => (
            <li key={c.id} className="chapter">
              <div className="chapter-text">
                <p className="chapter-days">
                  {t(UI.journey.day)} {c.days}
                  {t(UI.journey.dayUnit)}
                </p>
                <h3>{t(c.title)}</h3>
                <p>{t(c.text)}</p>
              </div>
              <div className={`chapter-photos n${Math.min(c.photos.length, 7)}`}>
                {c.photos.map((p, i) => (
                  <button key={p.file} className="photo" onClick={() => setOpen(photos.indexOf(p))} aria-label={`${dayLabel(p.day)}: ${t(p.alt)}`}>
                    <img src={src(p.file, i !== 0)} alt={t(p.alt)} loading="lazy" width={560} height={560} />
                    <span className="photo-day">{dayLabel(p.day)}</span>
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <p className="after">
          <a className="text-link" href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer">
            {t(UI.journey.igNote)}
          </a>
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialogRef.current && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {open !== null && (
          <figure>
            <img src={src(photos[open].file)} alt={t(photos[open].alt)} />
            <figcaption>
              <strong>
                {dayLabel(photos[open].day)}, {dateOf(photos[open].day)}
              </strong>
              <span>{t(photos[open].alt)}</span>
              <span className="lightbox-count">
                {open + 1} / {photos.length}
              </span>
            </figcaption>
            <button className="lb-btn lb-prev" onClick={() => step(-1)} aria-label={t(UI.journey.prev)}>
              <ChevronLeft size={26} />
            </button>
            <button className="lb-btn lb-next" onClick={() => step(1)} aria-label={t(UI.journey.next)}>
              <ChevronRight size={26} />
            </button>
            <button className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label={t(UI.journey.close)} autoFocus>
              <X size={24} />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
