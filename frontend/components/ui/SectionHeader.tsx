export function SectionHeader({ index, eyebrow, title, intro, className = "" }: { index?: string; eyebrow?: string; title: string; intro?: string; className?: string }) {
  return (
    <header className={`section-header ${className}`}>
      {(index || eyebrow) && <p className="eyebrow">{index && <span>{index}</span>}{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
