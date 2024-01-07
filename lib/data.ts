import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Finance",
    location: "Indore, MP",
    description:
      "I graduated Finance after 3 year of studying from Chameli Intitute of Professional.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Indore, MP",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Front-End Developer",
    location: "Indore, MP",
    description:
      "I learn front-end development working on projects. My stack includes React, Next.js, TypeScript, Tailwind, HTML and Redux. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Task Tracker",
    description:
      "I made this project to test my basic knowledge about react.",
    tags: ["React", "Javascript", "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Github Data Fetching",
    description:
      "This project was given to me as a chellenge before interview. The challenge was to not fire requests as long as user is typing. Typically you should throttle requests so that when user types quickly, we fire one request with the latest input value instead of many.",
    tags: ["React", "JavaScript", "CSS", "Redux", "Redux Thunk"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolios Site",
    description:
      "You can already the the project. The site you are on is my portfolio site.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
] as const;
