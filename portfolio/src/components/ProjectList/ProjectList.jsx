import "./ProjectList.css";
import Project from "../Project/Project.jsx";
import { projects } from "../../../data/data.js";

function Projects() {
  return (
    <div className="pl-container" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio Projects</h1>
        <p className="pl-desc">
          Dive into my collection of Portfolio Projects, showcasing the diverse
          range of work I’ve accomplished. Each project is featured as a
          clickable link, allowing you to explore the details and see the
          results firsthand. For those interested in the technical side, you can
          access the source code on GitHub by clicking the accompanying GitHub
          icon.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            link={project.link}
            sourceCode={project.github}
            name={`project_${project.id} p-img`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
