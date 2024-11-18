import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./modal.css";

export default function ProjectModal({ project, isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
      }}
      transition={{ duration: 0.3 }}
      onClick={closeModal}
    >
      <motion.div
        className="modal-content"
        initial={{ transform: "translateY(100%)", maxHeight: 0 }}
        animate={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          maxHeight: isOpen ? "90vh" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-button" onClick={closeModal}>
          ×
        </button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </motion.div>
    </motion.div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
