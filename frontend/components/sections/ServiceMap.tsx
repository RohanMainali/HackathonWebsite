import { serviceMap } from "@/content/services";

export function ServiceMap() {
  return <div className="service-map">{serviceMap.map((group, index) => <section key={group.title}><span className="service-map__number">0{index + 1}</span><div><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>)}</div>;
}
