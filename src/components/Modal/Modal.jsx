/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const Modal = ({ project, isOpen, closeModal, description, icons }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, transform: "translateY(100%)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        exit={{ opacity: 0, transform: "translateY(100%)" }}
      >
        <button onClick={closeModal} className="close-modal">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h4>{project.introduction}</h4>
        <div className="project-icons">
          {icons.map((icon, iconIndex) => {
            return <FontAwesomeIcon key={iconIndex} icon={icon} />;
          })}
        </div>

        <div dangerouslySetInnerHTML={description} />

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="modal-link">Visit {project.title}</button>
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
