import "./featuredWork.css";

const projects = [
  {
    title: "POMODORO",
    description:
      "A Job Search Platform expected to Serve 1M Active Users in the US Market",
    category: ["WEB", "REACT"],
    imageUrl: "/assets/images/pomodoro/pomodoro.webp",
    backgroundPosition: "top",
  },
  {
    title: "KASA",
    description:
      "AR Pay uses Augmented Reality based apps to deliver AR payment to connect with virtual",
    category: ["AR", "UNITY"],
    imageUrl: "/assets/images/kasa/kasa.png",
    backgroundPosition: "center",
  },
  {
    title: "ARGENT.BANK",
    description: "Allows Users Globally to add Tokens on store Assets",
    category: ["BLOCKCHAIN", "REACT"],
    imageUrl: "/assets/images/argentBank/argentBank.webp",
    backgroundPosition: "center",
  },
  {
    title: "PARIS.ART",
    description:
      "Empowered 500K Users with 24-Hour Fitness Tracking and Goal Setting",
    category: ["APP", "NODE"],
    imageUrl: "/assets/images/parisArt/parisArt.webp",
    backgroundPosition: "center",
  },
];

function FeaturedWork() {
  return (
    <section className="featured-work" id="featured-work">
      <h2>Featured Work</h2>
      <div className="featured-work-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`featured-work-item ${
              index === 0 || index === 3 ? "full-width" : ""
            }`}
          >
            <div
              className="featured-work-image"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                backgroundPosition: project.backgroundPosition,
              }}
            ></div>
            <div className="featured-work-info">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-category">
                {project.category.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>
              <button>View project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
