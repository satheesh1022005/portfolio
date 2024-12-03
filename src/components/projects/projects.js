import "./projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import git from "../../assets/git.svg";
import c from "../../assets/c.svg";
import java from "../../assets/java.svg";
import express from "../../assets/express.jpg";
import flask from "../../assets/flask.jpg";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.jpg";
import node from "../../assets/node.jpg";
import python from "../../assets/python.jpg";

import eco_saver from "../../assets/ecosaver.jpeg";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ayush from "../../assets/ayush.png";
import definify from "../../assets/definify.png";
import learnSQL from "../../assets/learnSQL.png";
import math from "../../assets/math.png";
import nlp2er from "../../assets/nlp2er.png";
import tenzies from "../../assets/tenzies.png";
import bms from "../../assets/bms.png";
function Projects() {
  const projectsData = [
    {
      name: "NLP-Driven Database Automation Tool",
      description:
        "Developed an NLP-powered automation tool that converts natural language into ER diagrams and creates SQL databases, streamlining database creation from concept to deployment.",
      techStack: [
        {
          stack: "#python",
          color: "text-danger",
        },
        {
          stack: "#MERN",
          color: "text-info",
        },
      ],
      githubLink: "https://github.com/satheesh1022005/NLP2DB",
      image: nlp2er, // Replace with actual image path or URL
      about:
        "Fine-tuned Google Gemini 1.5 Pro Flash for ER diagram generation, created an agent with CrewAI for NLP-to-SQL query generation, and utilized the Mermaid library for dynamic ER diagram visualization.",
    },
    {
      name: "LearnSQL",
      description:
        "Interactive SQL learning platform designed for college DBMS classes. It enables faculty to assign exercises and tests, while students can learn, practice SQL, and receive guidance. Faculty can also monitor student progress for improved assessment.",
      techStack: [
        {
          stack: "#MERN",
          color: "text-info",
        },
        {
          stack: "#python",
          color: "text-danger",
        },
      ],
      githubLink: "https://github.com/satheesh1022005/DBlearn",
      image: learnSQL, // Replace with actual image path or URL
      about:
        "Developed with the MERN stack, integrated Google Gemini 1.5 Pro Flash for NLP-based doubt clearing, implemented RBAC, and utilized AlaSQL for the SQL playground.",
    },
    {
      name: "BUS_MANAGEMENT SYSTEM",
      description:
        "An award-winning project developed in 30 hours for the KEC Hackathon, featuring live bus tracking and finding nearest buses.",
      techStack: [
        {
          stack: "#react",
          color: "text-success",
        },
        {
          stack: "#node.js",
          color: "text-info",
        },
        {
          stack: "#express.js",
          color: "text-info",
        },
        {
          stack: "#mongoDB",
          color: "text-danger",
        },
      ],
      githubLink: "https://github.com/satheesh1022005/bus-management-system",
      image: bms,
      about:
        "This web application optimizes bus transportation within KEC using real-time GPS and smart scheduling. Key features include real-time tracking, dynamic scheduling, user notifications, seat availability, and a feedback system. Developed for the KEC Hackathon, it aims to enhance campus transportation efficiency and sustainability.",
    },
    {
      name: "Electricity Monitoring & Optimization System",
      description:
        "Built an electricity monitoring system that tracks appliance consumption, creates custom usage plans, and alerts users to turn off appliances when they exceed their targets.",
      techStack: [
        {
          stack: "#MERN",
          color: "text-success",
        },
        {
          stack: "#Arduino",
          color: "text-info",
        },
        {
          stack: "#Embedded C",
          color: "text-warning",
        },
      ],
      githubLink:
        "https://github.com/satheesh1022005/Electricity_Monitoring_and_Optimization_System", // Replace with actual GitHub link
      image: eco_saver, // Replace with the actual image variable
      about:
        "Fetched data from sensors using Arduino Nano, transmitted it to the Node.js server via Bluetooth, and leveraged WebSocket for real-time client-server interaction. The system optimizes electricity consumption by offering users insights and recommendations for efficient appliance usage.",
    },
    {
      name: "Definify",
      description:
        "Definify is a Chrome extension that helps you find the meaning of English words, as well as their synonyms and antonyms.",
      techStack: [
        {
          stack: "#HTML",
          color: "text-success",
        },
        {
          stack: "#CSS",
          color: "text-info",
        },
        {
          stack: "#JavaScript",
          color: "text-warning",
        },
      ],
      githubLink:
        "https://github.com/satheesh1022005/definify-chrome-extension", // Replace with actual GitHub link
      image: definify, // Replace with the actual image variable or path
      about:
        "Definify is a Chrome extension that provides instant access to word meanings, synonyms, and antonyms, enhancing the user's vocabulary comprehension and language skills.",
    },
    {
      name: "Math Fiesta",
      description:
        "Math Fiesta is an event webpage particularly designed to showcase the Maths Club's national level event, Math Fiesta '24. It is intended to advertise the event and facilitate the registration of students across the city.",
      techStack: [
        {
          stack: "#React",
          color: "text-success",
        },
      ],
      githubLink: "https://github.com/T-Dharun/Math_Fiesta", // Replace with actual GitHub link if available
      liveLink: "https://mathsclub.kongu.edu/",
      image: math, // Replace with the actual image variable or path
      about:
        "Math Fiesta is a dynamic event webpage developed for the Maths Club at Kongu Engineering College. The platform promotes the national-level Math Fiesta '24 event and enables students to register for the event easily, ensuring smooth event management and wider participation.",
    },
    {
      name: "Tenzies",
      description:
        "A Tenzies game application using React.js, Node.js, Express.js, and SQL, featuring interactive gameplay, secure user authentication, and robust backend API for managing game data and scores. This project showcases my full-stack development skills and ability to create engaging and efficient web applications.",
      techStack: [
        {
          stack: "#React.js",
          color: "text-success",
        },
        {
          stack: "#Node.js",
          color: "text-info",
        },
        {
          stack: "#Express.js",
          color: "text-info",
        },
        {
          stack: "#SQL",
          color: "text-danger",
        },
      ],
      githubLink: "https://github.com/satheesh1022005/Tenzies", // Replace with actual GitHub link if available
      liveLink:
        "https://66912dbf79b92c224df2ae69--zingy-hamster-855659.netlify.app/",
      image: tenzies, // Replace with the actual image variable or path
      about:
        "Tenzies is an engaging dice game that allows users to roll dice and attempt to hold on to certain dice values to achieve a score. The application features user authentication for personalized gameplay and tracks scores in a secure backend powered by Node.js and Express.js, while the game interface is designed using React.js for a responsive user experience.",
    },
    {
      name: "AYUSH Startup Registration Portal",
      description:
        "A web-based platform to streamline and simplify the registration process for AYUSH startups. It helps new entrepreneurs complete registration by submitting required documents, ensuring regulatory compliance, and receiving real-time feedback.",
      techStack: [
        {
          stack: "#MERN",
          color: "text-success",
        },
        {
          stack: "#Python",
          color: "text-warning",
        },
      ],
      githubLink: "https://github.com/satheesh1022005/ayush", // Replace with actual GitHub link if available
      image: ayush, // Replace with the actual image variable or path
      about:
        "The AYUSH Startup Registration Portal simplifies the startup registration process for AYUSH businesses by allowing them to submit required documentation, validate their information, and receive approval from relevant authorities. It includes features for document uploads, user authentication, and verification, powered by Node.js, Express.js, and MongoDB, ensuring data security and scalability. This platform aims to empower entrepreneurs in the AYUSH sector by making the registration process faster and more efficient.",
    },

    // Add more projects as needed
  ];
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "Bootstrap", image: bootstrap },
    { name: "MySQL", image: mysql },
    { name: "MongoDB", image: mongodb },
    { name: "Express.js", image: express },
    { name: "React", image: react },
    { name: "Node.js", image: node },
    { name: "Python", image: python },
    { name: "Flask", image: flask },
    { name: "Git", image: git },
    { name: "Java", image: java },
    { name: "C", image: c },
  ];
  return (
    <div className="projects-container" id="project">
      <div className="projects">
        <section className="skills">
          <h3>Skills</h3>
          <p className="text-info">I can say i'm quite good at</p>
        </section>
        <section className="skills-logo">
          {skills.map((skill, index) => (
            <img src={skill.image} alt={skill.name} />
          ))}
        </section>
        <section className="project-introduction">
          <h1>Projects</h1>
          <p>
            Highlighted here are a projects that give a peek into my skills and
            hands-on experience.{" "}
            <b>
              <em>
                I've provided concise descriptions for each project, along with
                handy links to code repositories.
              </em>
            </b>{" "}
            These examples not only showcase my proficiency in solving
            real-world problems but also underscore my adeptness with diverse
            technologies. Furthermore, they attest to my project management
            skills, illustrating my ability to navigate and lead successfully in
            various scenarios. These projects collectively serve as a testament
            to my practical expertise and commitment to delivering effective
            solutions.
          </p>
        </section>
        <div className="projects-container-grid">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
