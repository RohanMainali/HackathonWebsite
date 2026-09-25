import { InquiryPage } from "@/components/design/InquiryPage";
export const metadata = { title: "Contact" };
export default function Page() {
  return (
    <InquiryPage
      label="CONTACT AMATRIX LABS"
      title="It starts with a conversation."
      description="An idea, a question, or a project taking shape. Tell us a little about it and we’ll explore the next step together."
      kind="custom"
      points={[
        "Events & innovation programs",
        "Partnerships & sponsorships",
        "Research & technology collaborations",
      ]}
    />
  );
}
