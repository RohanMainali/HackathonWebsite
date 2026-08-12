import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() { return <main id="main-content" className="not-found"><Container><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This route missed the room.</h1><p>The page may have moved, or the link may need an update.</p><ButtonLink href="/">Return home</ButtonLink></Container></main>; }
