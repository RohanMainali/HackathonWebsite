import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  return <Link className={`button button--${variant} ${className}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}
