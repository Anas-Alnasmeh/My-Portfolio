import { HiOutlineArrowUpRight, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-desc">
            Three projects worth a closer look. Replace these placeholders
            with real case studies, screenshots, and links.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} className="project-card glass-panel" delay={i * 0.12}>
              <div className="project-card__media" aria-hidden="true">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <a
                    href={project.github}
                    className="btn-icon"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <HiOutlineCodeBracketSquare size={18} />
                  </a>
                  <a
                    href={project.demo}
                    className="btn btn-secondary project-card__demo-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <HiOutlineArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
