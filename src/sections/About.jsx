import Reveal from "../components/Reveal";
import { STATS } from "../data/stats";
import { useCounter } from "../hooks/useCounter";
import "./about.css";

function StatCard({ stat, index }) {
  const { ref, value } = useCounter(stat.value);
  return (
    <Reveal
      as="div"
      className="stat-card glass-panel"
      delay={index * 0.08}
      ref={ref}
    >
      <span className="stat-card__value">
        {value}
        <span className="stat-card__suffix">{stat.suffix}</span>
      </span>
      <span className="stat-card__label">{stat.label}</span>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <Reveal direction="right" className="about__intro glass-panel">
            <p className="eyebrow">about</p>
            <h2 className="section-title">
              Building for the person on the other side of the screen.
            </h2>
            <p className="section-desc" style={{ marginTop: "var(--space-4)" }}>
              I'm a frontend developer who cares about the details most people
              skip — focus states, loading skeletons, the 200ms that make an
              interaction feel instant instead of laggy. I work mainly in
              React, and I treat accessibility and performance as part of the
              design, not an afterthought.
            </p>
            <p className="section-desc" style={{ marginTop: "var(--space-3)" }}>
              When I'm not shipping interfaces, I'm usually refining a design
              system detail or reading through a spec I didn't need to read —
              just to understand the "why" behind the API.
            </p>
          </Reveal>

          <div className="about__stats">
            {STATS.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
