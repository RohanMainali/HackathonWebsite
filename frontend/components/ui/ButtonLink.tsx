import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  return <a className={`button button--${variant} ${className}`} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<span aria-hidden="true">→</span></a>;
}
