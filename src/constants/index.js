import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  degree,
  cognizant,
  java,
  spring,
  sql,
  booking,
  leetclone,
  connectify,
  streamvibe,
  hoobank,
  cheffood
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "My Sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Computer Science Engineering",
    company_name: "Saranathan College of Engineering, Trichy",
    icon: degree,
    iconBg: "white",
    date: "July 2019 - May 2023",
    points: [
      "C Programming, OOPS, DBMS, OS",
      "Software Engineering, Artificial Intelligence",
      "Algorithms, Data Structures, Compiler Design",
      "Theory of Computation, Internet Programming",
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "white",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Developing web applications using React.js, Spring Boot, and MySql",
      "Collaborating with teams developers to create high-quality products.",
      "Implementing responsive design and microservices architecture for backend.",
    ],
  }
];

const projects = [
  {
    name: "Booking App",
    description:
      "Web-based platform that allows users to resiter, login, search, book, and manage rooms from different parts of city. User Interface similar to Booking.com",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/Guhan000/booking-app",
    live_link: "https://instant-booking.netlify.app/"
  },
  {
    name: "LeetClone",
    description:
      "Web application that enables users to register, login, code, like, star, dislike the coding solutions on Javascript language. User Interface similar to Leetcode.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: leetclone,
    source_code_link: "https://github.com/Guhan000/leetcode-clone",
    live_link: "https://leetclone.netlify.app/"
  },
  {
    name: "Connectify",
    description:
      "Social media application enables user to register, login, post, add friends, remove friends, like posts. User Interface built in MaterialUI and added Responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: connectify,
    source_code_link: "https://github.com/Guhan000/social-media",
    live_link: "https://connectify-social-media.netlify.app/"
  },
  {
    name: "Stream Vibe",
    description:
      "Web-based platform that allows users to search, watch, categorize videos like Youtube. Used Youtube API to render videos and added Responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: streamvibe,
    source_code_link: "https://github.com/Guhan000/StreamVibe",
    live_link: "https://stream-vibe.netlify.app/"
  },
  {
    name: "Hoo Bank",
    description:
      "Web-based platform that contains all sections of the modern digital banking application. User Interface built in React and Tailwind and added Responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: hoobank,
    source_code_link: "https://github.com/Guhan000/hoobank",
    live_link: "https://hoo-banking.netlify.app/"
  },
  {
    name: "Chef Food",
    description:
      "Web-based platform that contains all sections of foods, snacks in the restaurents. User Interface built in React and CSS and added Responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: cheffood,
    source_code_link: "https://github.com/Guhan000/chef-food",
    live_link: "https://cheff-food.netlify.app/"
  },
];

export { services, technologies, experiences, projects };
