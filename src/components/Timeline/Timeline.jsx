import "./timeline.css";

const projects = [
  {
    year: "2024/10",
    title: "PomodoroAPP - Projet Personnel React",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2024/10",
    title: "Obtention License professionnel développeur d'applications",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2024/09",
    title: "Argent Bank - Projet React",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2024/07",
    title: "SportSee - Projet React",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2024/05",
    title: "Kasa - Projet React",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2024/03",
    title: "Billed - Projet React",
    type: "Case Study",
    color: "orange",
  },
  {
    year: "2023/11",
    title: "Les petits Plats - Projet JavaScript ",
    type: "Website Live",
    color: "black",
  },
  {
    year: "2023-2024",
    title:
      "License professionnelle Développeur d'applications JavaScript/React (Niv.6) - OpenClassRooms",
    type: "View Gallery",
    color: "purple",
  },
  {
    year: "2023/06",
    title:
      "Gallery Art - Projet d'évaluation du titre professionnel développeur Web et Web Mobile",
    type: "View Gallery",
    color: "purple",
  },
  {
    year: "2022-2023",
    title:
      "Titre professionnel Développeur WEB et WEB Mobile (Niv.5) - Talis Périgueux",
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
