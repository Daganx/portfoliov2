import "./modal.css";

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {/* <h2 className="modal-title">{project.title}</h2> */}
        <div className="modal-image-container">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="modal-image-presentation"
          ></img>
          <div className="modal-description">
            <img
              src={project.imageModalUrl}
              alt={project.title}
              className="modal-image"
            />
            <h3>{project.descriptionModal}</h3>
          </div>
        </div>

        <ul className="modal-category">
          {project.category.map((cat, index) => (
            <li key={index}>
              <h4>{cat}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
