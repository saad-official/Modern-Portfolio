import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import MernShop from "@/public/shop3.png";
import AirbnbProject from "@/public/pro11.png"
import FiFaProject from "@/public/fifa-project.png";
import AlAwalProject from "@/public/al-awal-project.png";
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
    title: "Indepentdent Consultant",
    location: "Pakistan, Remote",
    description:
      "I have created an abundant of project from a variety of niches during my freelancing tenure. Including Web Development, Assignment help and more ",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "React Native Developer",
    location: "Nigeria, Remote",
    description:
      "Dadipay is a startup which aims to build a Payment mobile wallet,Where I Contributed to the completion of the mobile app by fixing bugs and improving the UI/UX, Create Secure Authentication, Managing User, Security, Api integration, Used Third Party Services, Adding Payment Integration, Launch to Testing for Publishing to both Android and IOS Users.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 - Dec 2022",
  },
  {
    title: "Software Engineer",
    location: "Saudi Arabia, Remote",
    description:
      "Contributed to project delivery at Webook.com by addressing UI issues, ensuring pixel-perfect design conversions, and crafting bespoke email templates to enhance client communication. Played a pivotal role in optimizing user experiences and ensuring the successful delivery of projects to client satisfaction.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Jun 2023",
  },
  {
    title: "Front-End Engineer",
    location: "Canada, Remote",
    description:
      "Currently serving as a Frontend Engineer for a SaaS product, collaborating closely with backend teams and product managers to integrate APIs and translate designs into code.Contributing to the development of a robust and user-centric software solution.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Clone",
    description:
      "Developed a comprehensive Airbnb clone application from scratch,Demonstrating proficiency in full-stack development and user-centric design principles.",
    tags: ["React #087ea4", "Next.js black", "MongoDB #15c213", "Tailwind #0ea5e9", "Prisma #1a202c", "TypeScript #3178c6"],
    imageUrl: AirbnbProject,
    link:'https://full-stack-airbnb-clone-six.vercel.app/'
  },
  {
    title: "Alawwal Park",
    description:
      "Contributed to enhancing the Alawwal Park website by addressing UI issues and implementing testing protocols, help them to deleiver to client",
    tags: ["React #087ea4", "Next.js black", "TypeScript #3178c6", "Tailwind #0ea5e9", "Jest #15c213", "ReactQuery #f59e0b"],
    imageUrl: AlAwalProject,
    link:'//tickets.victoryarena.com/'
  },
  {
    title: "FIFA Club World Cup",
    description:
      "Contributed to FIFA Club World Cup website by designing components,closely work with the design team.created email templates",
      tags: ["React #087ea4", "Next.js black", "TypeScript #3178c6", "Tailwind #0ea5e9", "Jest #15c213", "ReactQuery #f59e0b"],
    imageUrl: FiFaProject,
    link:'https://fifaclubwc2023.com/'

  },
  {
    title: "Mern Stack Ecommerce",
    description:
      "Developed a fully functional MERN stack e-commerce website, integrating MongoDB, Express.js, React.js, and Node.js",
    tags: ["React #087ea4", "MongoDB #15c213", "Expres #010101", "Nodejs #191c22", "Stripe #121274", "JWT #d63aff"],
    imageUrl: MernShop,
    link:'https://shopper-mall.netlify.app'
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
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "React Native",
  "GraphQL",
  "Redux",
  "Express",
  "PostgreSQL",
  "CI/CD",
  "Docker",
  "AWS",
] as const;