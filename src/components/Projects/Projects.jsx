import "./Projects.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import {
  faReact,
  faNodeJs,
  faNode,
  faJs,
  faApple,
  faWindows,
  faLinux,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faBusinessTime, faDatabase, faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "reactwithdagan",
      introduction: "What is React With Dagan ?",
      descriptionModal:
        "The ReactWithDagan FullStack Blog project is a comprehensive application built to enhance my understanding of full-stack development and CRUD (Create, Read, Update, Delete) operations. <br />Through this project, I gained a deeper understanding of the core principles of frontend and backend development.<br />By implementing CRUD operations, I learned how to create and manage resources effectively, ensuring a full lifecycle for application data. This project allowed me to bridge the gap between frontend and backend systems, emphasizing the importance of each layer and how they interconnect to form a cohesive full-stack application. On the frontend, I utilized React with Vite to create a fast, responsive, and dynamic user interface.<br /> The frontend effectively handles user interactions and seamlessly communicates with the backend through RESTful APIs.",
      icons: [faReact, faNodeJs, faNode, faDatabase],
      link: "https://reactwithdagan.vercel.app/",
    },
    {
      title: "Download Cleanup",
      introduction: "What is Download Cleanup ?",
      descriptionModal:
        "The Downloads Cleanup Script is a practical utility I developed using JavaScript to automate the organization of files in the Downloads folder.<br/> This script identifies files based on their types (e.g., images, documents, videos, archives) and sorts them into designated subfolders. For example, images are moved to an 'Images' folder, documents to a 'Documents' folder, and so on.<br /> By using JavaScript's file system libraries, the script:<ul><li>- Scans the Downloads directory to detect all existing files.</li><li>- Categorizes files dynamically based on their extensions (e.g., .jpg, .pdf, .mp4).</li><li>- Creates subfolders if they don’t already exist.</li><li>- Moves files to their appropriate folders efficiently.</li></ul><br />Through this project, I deepened my understanding of file system operations in JavaScript and learned how to work with paths, extensions, and directory management. It also taught me the importance of writing modular and error-resistant code, as handling unexpected file types or permission errors was crucial.",
      icons: [faJs, faApple, faWindows, faLinux],
      link: "https://github.com/Daganx/Downloads_Cleanup",
    },
    {
      title: "Temp Cleanup",
      introduction: "What is Temp Cleanup ?",
      descriptionModal:
        "The Temp Cleanup Script is a tool I created using JavaScript to automate the removal of unnecessary temporary files, helping to free up storage space and improve system efficiency.<br />This script works by:<br /><ul><li>- Scanning specified directories for temporary files, typically identified by extensions like .tmp, .log, or other user-defined criteria.</li><li>- Validating file types and ensuring no essential files are accidentally deleted.</li><li>- Deleting the temporary files securely to clean up cluttered directories.</li></ul><br />By implementing this project, I learned how to work with file system operations in JavaScript, such as reading directories, filtering files by type, and safely deleting them. I also explored strategies for handling edge cases, like skipping files that might still be in use or logging errors when encountering permission issues.",
      icons: [faJs, faApple, faWindows, faLinux],
      link: "https://github.com/Daganx/clean__temp",
    },
    {
      title: "Kasa",
      introduction: "What is Kasa ?",
      descriptionModal: "Kasa is a modern web application designed to showcase accommodations, offering users a smooth and visually appealing experience. I built this project using React, leveraging React Router DOM for seamless navigation and SASS for efficient styling.<br /><br /> Key features of the application include: <br /><br /><ul><li>- Dynamic Routing: Powered by React Router DOM, the app allows users to explore individual accommodation pages with unique details, such as descriptions, photos, and amenities, all dynamically rendered based on the data provided.</li><li>- Responsive Design: By utilizing SASS, I crafted reusable styles and implemented responsive layouts to ensure the application looks great on any device.</li><li>- User-Friendly Interface: The design focuses on simplicity and accessibility, making it easy for users to navigate and find relevant information.</li></ul><br />Through this project, I deepened my understanding of React component architecture, learned to efficiently manage routes for a dynamic application, and honed my skills in modular CSS with SASS.",
      icons: [faReact, faNode, faSass, faDatabase],
      link: "https://github.com/daganx/kasa",
    },
    {
      title: "Argent Bank",
      introduction: "What is Argent Bank ?",
      descriptionModal: "Argent Bank is a full-stack application that simulates a secure and functional banking platform. This project was designed to showcase features like user authentication, secure data handling, and seamless frontend-backend communication.<br /><br />Key Features :<br /><br /><ul><li>- Frontend: Built with React and Redux, the app provides a dynamic and responsive user interface, allowing users to log in, view account details, and perform banking operations.</li><li>- Backend: Developed using Node.js and Express, the backend handles business logic, manages sensitive operations, and ensures robust communication with the database.</li><li>- Database: The application uses MongoDB to store user data securely, ensuring scalability and flexibility.</li><li>- Secure Authentication: JWT (JSON Web Token) is implemented for user login and session management, ensuring secure access to protected routes.</li><li>- Protected Routes: The app includes role-based access control and secure endpoints to prevent unauthorized access to sensitive user information.</li></ul><br />Argent Bank is a practical demonstration of how to design and build a secure, user-centric, and scalable full-stack application",
      icons: [faReact, faNodeJs, faNode, faDatabase],
      link: "https://github.com/daganx/argentbank",
    },
    {
      title: "Pomodoro",
      introduction: "What is Pomodoro ?",
      descriptionModal: "Description du projet Download Cleanup",
      icons: [faReact, faBusinessTime, faJs],
      link: "https://github.com/daganx/pomodoro-app",
    },
    {
      title: "in Build",
      introduction: "What is In Build ?",
      descriptionModal: "I'm currently building a Quiz Game !",
      icons: [faReact, faGamepad],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="featured-work">FEATURED WORKS</h2>
      <section className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`project-${project.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              onClick={() => openModal(project)}
            ></article>
          ))}
        </div>
      </section>
      <Modal
        project={selectedProject}
        isOpen={isModalOpen}
        closeModal={closeModal}
        description={
          selectedProject ? { __html: selectedProject.descriptionModal } : null
        }
        icons={selectedProject ? selectedProject.icons : []}
      />
    </>
  );
}
