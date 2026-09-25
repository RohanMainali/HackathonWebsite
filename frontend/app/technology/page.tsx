import { InquiryPage } from "@/components/design/InquiryPage";
export const metadata = { title: "AI & Technology" };
export default function Page() {
  return (
    <InquiryPage
      label="AI & TECHNOLOGY"
      title="Make technology work for you."
      description="Practical advice and hands-on development to turn a technical opportunity into a useful next step."
      kind="technology"
      points={[
        "Explore where AI can make a difference",
        "Build and test a focused prototype",
        "Get guidance on architecture and implementation",
        "Shape a custom technology project",
      ]}
    />
  );
}
