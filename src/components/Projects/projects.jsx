import React, { useState } from "react";
import "./projects.css";
import { FaLink, FaGithub } from "react-icons/fa6";

const projectsData = [
  {
    number: "01",
    title: "HelloDude",
    subtitle: "Full-stack real-time chat and video calling application",
    description:
      "HelloDude is a full-stack real-time chat and video calling application that allows users to communicate through messages, voice, and video calls..",
    image: "./HelloDude.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "MongoDB",
    ],
    status: "Active Project",
    link: "https://hellodude-frontend.onrender.com/signuppage",
    type: "PersonalProject",
  },
  {
    number: "02",
    title: "PortFolio",
    subtitle: "Personal Portfolio Website",
    description:
      "A dynamic portfolio website showcasing projects, skills, and experiences with a modern design and smooth animations.",
    image: "./PORTFOLiO.png",
    technologies: [
      "React",
      "CSS",
      "Responsive Design",
      "Animations",
      "Vite",
      "Good Ui/UX",
    ],
    status: "Active Project",
    link: "#",
    type: "PersonalProject",
  },
  {
    number: "03",
    title: "NxtWave-website",
    subtitle: "Educational Platform for Tech Courses",
    description:
      "An educational platform offering a wide range of tech courses and resources for students and professionals.",
    image: "./Nxtwave.png",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
    status: "Active Project",
    link: "https://hemanthtejavath.github.io/Nxtwave-website-clone/",
    type: "internshipProject",
  },
  {
    number: "04",
    title: "FindIt",
    subtitle: "A website for faster recovery",
    description:
      "FindIt is a website designed to facilitate the faster recovery of lost items by connecting finders with owners through a user-friendly interface and real-time notifications.",
    image: "./Findit.png",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
    status: "InProgress...",
    link: "#",
    type: "PersonalProject",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Personal Projects")
      return project.type === "PersonalProject";
    if (activeFilter === "Internship Projects")
      return project.type === "internshipProject";
    return true;
  });

  return (
    <section className="projects" id="projects">
      {/* Background orbs */}
      <div className="projects__orb projects__orb--left" />
      <div className="projects__orb projects__orb--right" />

      <div className="projects__inner">
        {/* Header */}
        <div className="projects__header">
          <div className="projects__badge">
            <span className="projects__badge-dot" />
            PORTFOLIO SHOWCASE
          </div>
          <h1 className="projects__title">PROJECTS</h1>
          <div className="projects__subtitle">
            <p>
              Building digital experiences that solve real problems and push
              technological boundaries. Each project represents a unique
              challenge and creative solution.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="projects__filters">
          <button
            className={`projects__filter-btn ${
              activeFilter === "All" ? "projects__filter-btn--active" : ""
            }`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
          <button
            className={`projects__filter-btn ${
              activeFilter === "Personal Projects"
                ? "projects__filter-btn--active"
                : ""
            }`}
            onClick={() => setActiveFilter("Personal Projects")}
          >
            Personal Projects
          </button>
          <button
            className={`projects__filter-btn ${
              activeFilter === "Internship Projects"
                ? "projects__filter-btn--active"
                : ""
            }`}
            onClick={() => setActiveFilter("Internship Projects")}
          >
            Internship Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article key={project.number} className="project-card">
              {/* Card Badge */}
              <div className="project-card__badge">
                <span className="project-card__number">{project.number}</span>
                <span className="project-card__featured">
                  {project.status === "Active Project"
                    ? "Featured"
                    : project.status === "InProgress..."
                      ? "Coming Soon..."
                      : ""}
                </span>
              </div>

              {/* Card Image */}
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />
                {/* Hover Overlay */}
                <div className="project-card__overlay">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-btn project-card__icon-btn--live"
                      title="View Live"
                    >
                      <FaLink />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href="#"
                      className="project-card__icon-btn project-card__icon-btn--code"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="project-card__content">
                {/* Title Section */}
                <div className="project-card__title-section">
                  <h2 className="project-card__title">{project.title}</h2>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.status === "Active Project" && (
                  <div className="project-card__tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="project-card__footer">
                  <span className="project-card__status">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                  {project.link !== "#" && (
                    <a href={project.link} className="project-card__link">
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
