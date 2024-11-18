import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectModal from "../Modal/Modal";

export default function Slideshow({ project, isFullWidth }) {
  const [isMobileImage, setIsMobileImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(project.imageUrl);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMobileImage((prev) => !prev);
      setImageUrl(isMobileImage ? project.imageMobileUrl : project.imageUrl);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobileImage, project.imageMobileUrl, project.imageUrl]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          backgroundImage: `url(${imageUrl})`,
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
        <button className="featured-work-button" onClick={openModal}>
          View project
        </button>
      </div>
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

Slideshow.propTypes = {
  project: PropTypes.object.isRequired,
  isFullWidth: PropTypes.bool.isRequired,
};
