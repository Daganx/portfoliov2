import projects from "../../data/timelineData";
import "./timeline.css";

export default function Timeline() {
  return (
    <div className="timeline" id="timeline">
      <h2 className="timeline__title">Timeline</h2>
      <div className="timeline__header">
        <span>Year</span>
        <span>Projects</span>
      </div>
      <div className="timeline__list">
        {projects.map((project, index) => (
          <div key={index} className="timeline__item">
            <span className="timeline__year">{project.year}</span>
            <span className="timeline__project">{project.title}</span>
            <button className={`timeline__button ${project.color}`}>
              {project.type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
