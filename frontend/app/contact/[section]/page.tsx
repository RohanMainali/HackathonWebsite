import { notFound } from "next/navigation";
import { InquiryPage } from "@/components/design/InquiryPage";
import { contactPages } from "@/content/contact-pages";

type Props = { params: Promise<{ section: string }> };
export function generateStaticParams() {
  return Object.keys(contactPages).map((section) => ({ section }));
}
export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const page = contactPages[section];
  return { title: page?.label ?? "Contact", description: page?.description };
}
export default async function Page({ params }: Props) {
  const { section } = await params;
  const page = Object.hasOwn(contactPages, section) ? contactPages[section] : undefined;
  if (!page) notFound();
  return <InquiryPage {...page} kind={section} />;
}
