import React from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  document.title = 'Project 3 Fusion | Projects';

  const data = [
    {
      imgUrl: "#",
      desc: "",
      title: "Project 3 Fusion",
      link: "#",
      source_code: "#",
      techstack: ["ReactJs", "Firebase", "aos"],
      tags: ["#nitp", "#reactjs"],
      id: "p01"
    },
    {
      imgUrl: "#",
      desc: "Official Alumni protal of NIT, Patna using ReactJs, Tailwind and Firebase with animations and dark theme, which also has an admin portal.",
      title: "NITP Alumni Portal",
      link: "#",
      source_code: "#",
      techstack: ["ReactJs", "Firebase", "aos"],
      tags: ["#alumni", "#nitp", "#reactjs"],
      id: "p02"
    },

  ];

  return (
    <div className="pt-16">
      <Heading heading="PROJECTS"></Heading>
      <div className="project_main">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;