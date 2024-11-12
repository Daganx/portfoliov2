import React from "react";
import featuredWorks from "../../data/featuredWorkData";
import "./featuredWork.css";

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="featured-work">
      <h2>Featured Work</h2>
      <div className="featured-work-grid">
        {featuredWorks.map((project, index) => (
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
              <button className="featured-work-button">
                <a href={project.githubUrl} target="new_blank">
                  View project
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
