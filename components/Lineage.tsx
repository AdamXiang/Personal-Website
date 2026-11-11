import { useState } from 'react';
import { LINEAGE, UI } from '../data/content';
import { useLang } from '../lang';

// The hero graphic: Adam's path drawn as a bronze → silver → gold pipeline.
export function Lineage() {
  const { t } = useLang();
  const [active, setActive] = useState(2);
  const stage = LINEAGE[active];

  return (
    <figure className="lineage" aria-label={t(UI.hero.lineageTitle)}>
      <figcaption className="lineage-caption">{t(UI.hero.lineageTitle)}</figcaption>
      <div className="lineage-track" role="tablist" aria-label={t(UI.hero.lineageHint)}>
        <span className="lineage-pulse" aria-hidden="true" />
        {LINEAGE.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            id={`stage-tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="stage-panel"
            className={`stage stage-${s.id}`}
            onClick={() => setActive(i)}
          >
            <span className="stage-medal" aria-hidden="true" />
            <span className="stage-layer">{t(s.layer)}</span>
            <span className="stage-title">{t(s.title)}</span>
            <span className="stage-years">{s.years}</span>
          </button>
        ))}
      </div>
      <div
        className={`stage-panel stage-panel-${stage.id}`}
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${stage.id}`}
      >
        <p className="stage-place">{t(stage.place)}</p>
        <p>{t(stage.kept)}</p>
      </div>
      <p className="lineage-hint">{t(UI.hero.lineageHint)}</p>
    </figure>
  );
}
