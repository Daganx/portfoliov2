import "./featuredWork.css";

const projects = [
  {
    title: "POMODORO",
    description: "A WEB App to optimize your time when you are working ! :)",
    category: ["WEB", "REACT"],
    imageUrl: "/assets/images/pomodoro/pomodoro.png",
    backgroundPosition: "center",
  },
  {
    title: "KASA",
    description: "A WEB APP developed to rent a house like AirBnB.",
    category: ["WEB", "REACT"],
    imageUrl: "/assets/images/kasa/kasa.png",
    backgroundPosition: "center",
  },
  {
    title: "ARGENT.BANK",
    description: "A Back-End Project with a CRUD for the users of Argent Bank.",
    category: ["CRUD", "REACT"],
    imageUrl: "/assets/images/argentBank/argentBank.png",
    backgroundPosition: "center",
  },
  {
    title: "GALLERY.ART",
    description:
      "A Symfony Project with a CRUD for a Gallery of Art (Fictive).",
    category: ["CRUD", "SYMFONY"],
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
