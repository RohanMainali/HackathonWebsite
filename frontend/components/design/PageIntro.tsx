import type { ReactNode } from "react";
export function PageIntro({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro content-width">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="page-intro-description">{description}</p>
      {children}
    </header>
  );
}
