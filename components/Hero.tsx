import { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { CHAPTERS, PROFILE, UI } from '../data/content';
import { useLang } from '../lang';

const MEDALS = ['bronze', 'silver', 'gold'] as const;

// Colour stops along the flow: raw bronze on the left, gold on the right.
const STOPS: [number, number, number][] = [
  [196, 122, 76],
  [196, 208, 214],
  [242, 194, 48],
];
function colourAt(t: number) {
  const seg = t < 0.5 ? 0 : 1;
  const k = seg === 0 ? t / 0.5 : (t - 0.5) / 0.5;
  const a = STOPS[seg];
  const b = STOPS[seg + 1];
  return `${Math.round(a[0] + (b[0] - a[0]) * k)},${Math.round(a[1] + (b[1] - a[1]) * k)},${Math.round(a[2] + (b[2] - a[2]) * k)}`;
}

/**
 * Background of the hero: rows of data drift in scattered on the left and
 * settle into tidy lanes on the right, changing from bronze to silver to gold.
 * It is the medallion architecture, drawn.
 */
function FlowCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999 };
    const LANES = 7;

    type P = { x: number; y: number; lane: number; speed: number; phase: number; len: number; wob: number };
    let parts: P[] = [];

    const spawn = (anywhere: boolean): P => ({
      x: anywhere ? Math.random() * w : -20,
      y: Math.random() * h,
      lane: Math.floor(Math.random() * LANES),
      speed: 0.5 + Math.random() * 1.1,
      phase: Math.random() * Math.PI * 2,
      len: 6 + Math.random() * 16,
      wob: 0.4 + Math.random() * 1.2,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(360, (w * h) / 4200));
      parts = Array.from({ length: count }, () => spawn(true));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const laneGap = Math.min(46, h / (LANES + 3));
      const laneTop = h * 0.5 - (laneGap * (LANES - 1)) / 2;

      for (const p of parts) {
        const t = Math.min(1, Math.max(0, p.x / w));
        // how "organised" the row is: 0 = raw scatter, 1 = settled in its lane
        const order = t < 0.3 ? 0 : t > 0.78 ? 1 : (t - 0.3) / 0.48;
        const eased = order * order * (3 - 2 * order);
        const laneY = laneTop + p.lane * laneGap;
        const wander = p.y + Math.sin(time * 0.0006 * p.wob + p.phase) * 26;
        let y = wander + (laneY - wander) * eased;
        let x = p.x;

        // rows step aside for the cursor
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14400) {
          const f = (1 - Math.sqrt(d2) / 120) * 26;
          const d = Math.sqrt(d2) || 1;
          x += (dx / d) * f;
          y += (dy / d) * f;
        }

        const alpha = 0.22 + eased * 0.55;
        ctx.fillStyle = `rgba(${colourAt(t)},${alpha})`;
        const len = p.len * (0.5 + eased * 1.3);
        const thick = 2 + eased * 1.5;
        ctx.fillRect(x, y - thick / 2, len, thick);

        if (!reduced) {
          p.x += p.speed * (0.7 + eased * 1.4);
          if (p.x > w + 30) Object.assign(p, spawn(false));
        }
      }
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      const was = running;
      running = entry.isIntersecting;
      if (running && !was && !reduced) raf = requestAnimationFrame(draw);
    });

    resize();
    raf = requestAnimationFrame(draw);
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

export function Hero() {
  const { t } = useLang();
  const strip = CHAPTERS.flatMap((c) => c.photos).filter((_, i) => i % 2 === 0);

  return (
    <section id="top" className="hero">
      <FlowCanvas />
      <div className="wrap hero-inner">
        <p className="hero-name">
          {PROFILE.name} ({PROFILE.nickname})
        </p>
        <h1 aria-label={UI.hero.lines.map((l) => t(l)).join(' ')}>
          {UI.hero.lines.map((line, i) => (
            <span key={line.en} className={`hero-line hero-line-${MEDALS[i]}`} style={{ animationDelay: `${0.15 + i * 0.28}s` }} aria-hidden="true">
              <span className="hero-medal" />
              {t(line)}
            </span>
          ))}
        </h1>
        <p className="hero-sub">{t(UI.hero.sub)}</p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#projects">
            {t(UI.hero.seeProjects)}
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="btn btn-light" href={PROFILE.resumeUrl} download>
            <Download size={18} aria-hidden="true" />
            {t(UI.nav.resume)}
          </a>
        </div>
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {t(UI.hero.status)}
        </p>
      </div>

      <a className="hero-strip" href="#journey" aria-label={t(UI.hero.scroll)}>
        <span className="hero-strip-label">{t(UI.hero.scroll)}</span>
        <span className="hero-strip-track" aria-hidden="true">
          {[...strip, ...strip].map((p, i) => (
            <img key={i} src={`./journey/${p.file}-t.webp`} alt="" width={132} height={132} loading={i < 8 ? 'eager' : 'lazy'} />
          ))}
        </span>
      </a>
    </section>
  );
}
