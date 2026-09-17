export function EngagementModels() {
  return (
    <section className="engage section">
      <div className="container">
        <p className="eyebrow">A LITTLE SUPPORT. OR THE WHOLE JOURNEY.</p>
        <h2>
          Choose how closely
          <br />
          we work together.
        </h2>
        <div className="engage-list">
          {[
            ["Support", "The right expertise, exactly where you need it."],
            ["Collaborate", "Your team and ours. One shared initiative."],
            [
              "Build Together",
              "From the first question to the final execution.",
            ],
            ["Custom", "A working relationship shaped around you."],
          ].map(([name, copy], i) => (
            <a href={`/contact?intent=${encodeURIComponent(name)}`} key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
        <p className="quiet-link">
          Need help with a technical challenge?{" "}
          <a href="/technology">Explore AI & technology consulting ↗</a>
        </p>
      </div>
    </section>
  );
}
