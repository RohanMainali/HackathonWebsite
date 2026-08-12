import { engagementModels } from "@/content/services";

export function EngagementModels() {
  return <ol className="engagement-list">{engagementModels.map((model, index) => <li key={model.title}><span>0{index + 1}</span><div><h3>{model.title}</h3><p>{model.description}</p></div></li>)}</ol>;
}
