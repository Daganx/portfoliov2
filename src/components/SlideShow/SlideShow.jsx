import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Slideshow({ project, isFullWidth }) {
  const [isMobileImage, setIsMobileImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMobileImage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`featured-work-item ${isFullWidth ? "full-width" : ""}`}>
      <div className="banner">
        <p className="banner-text">{project.title}</p>
      </div>
      <div
        className={`featured-work-image ${
          isMobileImage ? "mobile-image" : "desktop-image"
        }`}
        style={{
          backgroundImage: `url(${
            isMobileImage ? project.imageMobileUrl : project.imageUrl
          })`,
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
        <button className="featured-work-button">View project</button>
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  project: PropTypes.object.isRequired,
  isFullWidth: PropTypes.bool.isRequired,
};

export default Slideshow;
