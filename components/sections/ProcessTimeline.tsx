import { processSteps } from "@/content/process";

export function ProcessTimeline() {
  return <ol className="process-timeline">{processSteps.map((step) => <li key={step.number}><span className="process-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>;
}
