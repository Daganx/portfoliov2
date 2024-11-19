import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./modal.css";

const overlayVariants = {
  hidden: { opacity: 0, visibility: "hidden" },
  visible: { opacity: 1, visibility: "visible" }
};

const contentVariants = {
  hidden: { transform: "translateY(100%)", maxHeight: 0 },
  visible: { transform: "translateY(0)", maxHeight: "90vh" }
};

const ModalContent = ({ project, closeModal }) => (
  <article className="modal-content-inner">
    <div className="modal-text">
      <h4>Why i built {project.title}:</h4>
      <div className="modal-icons">
        {project.icons.map((icon, index) => (
          <FontAwesomeIcon key={`icon-${index}`} icon={icon} />
        ))}
      </div>
      <h5>{project.descriptionModal}</h5>
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="source-button"
      >
        Code Source
      </a>
    </div>
    <div className="modal-separator" />
    <div className="modal-text">
      <img src={project.imageModalUrl} alt={project.title} />
    </div>
  </article>
);

export default function ProjectModal({ project, isOpen, closeModal }) {
  useEffect(() => {
    const handleEscapeKey = (e) => e.key === "Escape" && closeModal();

    isOpen && document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      onClick={closeModal}
    >
      <motion.div
        className="modal-content"
        variants={contentVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-button" onClick={closeModal}>
          ×
        </button>
        <h2>{project.title}</h2>
        <ModalContent project={project} closeModal={closeModal} />
      </motion.div>
    </motion.div>
  );
}

ModalContent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionModal: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageModalUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

ProjectModal.propTypes = {
  project: ModalContent.propTypes.project,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
