import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { BiLinkExternal } from "react-icons/bi"; // External link icon
import "./projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="laptop-card">
      <div className="laptop-top">
        <div className="screen">
          <img
            className="screen-image"
            src={project.image}
            alt={`${project.name} screenshot`}
          />
        </div>
      </div>
      <div className="laptop-bottom">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        {/* Links Section */}
        <div className="links-container">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="project-link github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} /> {/* GitHub icon */}
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="project-link live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal size={20} /> {/* Live project icon */}
            </a>
          )}
        </div>

        {/* Tech Stack at the Bottom */}
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className={`tech-item ${tech.color}`}>
              {tech.stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
