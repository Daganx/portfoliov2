import pomodoroImage from "../assets/images/pomodoro/pomodoro.png";
import kasaImage from "../assets/images/kasa/kasa.png";
import argentBankImage from "../assets/images/argentBank/argentBank.png";
import parisArtImage from "../assets/images/parisArt/parisArt.png";

const featuredWorks = [
  {
    id: "pomodoro",
    title: "POMODORO",
    description: "A WEB App to optimize your time when you are working! ⏰",
    descriptionModal:
      "The Pomodoro App is a web application developed in React that helps users boost their productivity by managing time effectively. Inspired by the Pomodoro Technique, this app enables users to work in focused intervals (typically 25 minutes) followed by short breaks, with the goal of enhancing concentration and reducing burnout.With built-in alerts, the app notifies users when it’s time to switch between work and break intervals, ensuring they stay on track without constantly watching the clock.",
    category: ["• WEB", "• REACT"],
    imageUrl: pomodoroImage,
    githubUrl: "https://www.github.com/daganx/pomodoro-app",
  },
  {
    id: "kasa",
    title: "KASA",
    description: "A WEB APP developed to rent a house like AirBnB. 🏠",
    descriptionModal:
      "Kasa is a web application project developed as part of the OpenClassrooms curriculum. It’s built using React and is designed to replicate the core functionalities of a property rental platform, similar to Airbnb. The app provides a user-friendly interface for browsing available rental properties, viewing detailed listings, and discovering essential information about each property.",
    category: ["• WEB", "• REACT"],
    imageUrl: kasaImage,
    githubUrl: "https://www.github.com/daganx/kasa",
  },
  {
    id: "argentBank",
    title: "ARGENT.BANK",
    description:
      "A Back-End Project with a CRUD for the users of Argent Bank. 🏦",
    descriptionModal:
      "ArgentBank is a web application developed as part of the OpenClassrooms curriculum, designed to simulate a secure online banking platform. Built with React and Redux, the app enables users to authenticate, view, and manage their bank account details. ArgentBank demonstrates core principles of secure authentication, state management, and the development of a polished, user-centric financial application.ArgentBank implements secure login and logout functionality, requiring users to sign in to access their account details.",
    category: ["• CRUD", "• REACT"],
    imageUrl: argentBankImage,
    githubUrl: "https://www.github.com/daganx/argentbank",
  },
  {
    id: "parisArt",
    title: "GALLERY.ART",
    description:
      "A Symfony Project with a CRUD for a Gallery of Art (Fictive). 🎨",
    descriptionModal:
      "Gallery Art is a full-featured web application developed with Symfony, designed to serve as an art gallery platform. The project includes a complete CRUD (Create, Read, Update, Delete) functionality, allowing users to manage and browse artwork collections. This application demonstrates the principles of backend development, database management, and server-side rendering, providing a solid foundation for building scalable, data-driven web applications.",
    category: ["• CRUD", "• SYMFONY"],
    imageUrl: parisArtImage,
    githubUrl: "https://www.github.com/daganx/gallery__symfony",
  },
];

export default featuredWorks;
