import "./timeline.css";

const projects = [
  {
    year: "2022 - 2024",
    title: "Talent Linker",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2023",
    title: "DEET Website Revamp",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2023",
    title: "AI Resume Builder",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2022",
    title: "Workruit Landing Page",
    type: "Website Live",
    color: "black",
  },
  {
    year: "2021",
    title: "Workruit Jobs Portal Mobile",
    type: "View Gallery",
    color: "purple",
  },
  {
    year: "2021",
    title: "Campus Portal (Online College Placement)",
    type: "View Gallery",
    color: "purple",
  },
  {
    year: "2020",
    title: "SBI Augmented Payment (Augmented Reality)",
    type: "View Gallery",
    color: "purple",
  },
];

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
