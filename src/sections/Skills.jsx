import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { SKILL_GROUPS } from "../data/skills";
import "./skills.css";

function SkillBar({ skill, delay }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__head">
        <span>{skill.name}</span>
        <span className="skill-bar__level">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.level / 100 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">skills</p>
          <h2 className="section-title">What I bring to a codebase</h2>
          <p className="section-desc">
            A working toolkit, grouped the way I actually reach for it — not
            an alphabetical wall of logos.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal
              key={group.id}
              className="skills__card glass-panel"
              delay={gi * 0.1}
            >
              <h3 className="skills__card-title">{group.label}</h3>
              <div className="skills__list">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={si * 0.08} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
