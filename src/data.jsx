import { nanoid } from "nanoid";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import portfolioCover from "./assets/portfolioProjectCover.png";
import taskManagerAPI from "./assets/taskManagerAPI.png";
import storeApi from "./assets/storeAPI.svg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#education", text: "education" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3 className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "React.js",
    icon: <FaReact className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Angular",
    icon: <FaAngular className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "AWS EC2",
    icon: <FaAws className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGit className="h-16 w-16 text-violet-600" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: portfolioCover,
    url: "https://rajireddyportfolio.netlify.app/",
    github:
      "https://github.com/varunreddyrajireddy/Portfolio-React-TailwindCSS",
    title: "Personal Portfolio Website",
    text: "Personal Portfolio Website using React.js and TailwindCSS",
  },
  {
    id: nanoid(),
    img: taskManagerAPI,
    url: "https://github.com/varunreddyrajireddy/Task_Manager_API",
    github: "https://github.com/varunreddyrajireddy/Task_Manager_API",
    title: "Task Manager Web App",
    text: "Task Manager Web application using Node.js, Express.js, JavaScript and MongoDB",
  },
  {
    id: nanoid(),
    img: storeApi,
    url: "https://github.com/varunreddyrajireddy/Store_API",
    github: "https://github.com/varunreddyrajireddy/Store_API",
    title: "Store API",
    text: "Fake Products API with all http methods",
  },
];
