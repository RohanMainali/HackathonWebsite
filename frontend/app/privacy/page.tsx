import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata("Privacy", "Editable privacy notice for this website and inquiry form.", "/privacy");

export default function PrivacyPage() { return <main id="main-content"><section className="page-hero page-hero--compact"><Container><p className="eyebrow">PRIVACY</p><h1>A clear, editable privacy notice.</h1><p>Last updated: review before launch</p></Container></section><section className="section prose"><Container><h2>Information we collect</h2><p>When you use the inquiry form, we collect the information you choose to provide so the team can understand and respond to your request.</p><h2>How we use information</h2><p>Inquiry information is used to respond, discuss a potential engagement and maintain necessary business records. Replace this draft with the final policy for your jurisdiction and operating practices.</p><h2>Service providers</h2><p>Email delivery may be handled by a configured provider. Analytics and other third-party services should be listed here if they are added.</p><h2>Retention and your choices</h2><p>Define the retention period, access process, correction process and deletion process before launch.</p><h2>Contact</h2><p>For privacy questions, email <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p></Container></section></main>; }
