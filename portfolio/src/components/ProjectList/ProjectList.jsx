import "./ProjectList.css";
import Project from "../Project/Project.jsx";
import { projects } from "../../../data/data.js";

function Projects() {
  return (
    <div className="pl-container" id="project-list">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio Projects</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consequatur, similique voluptas a autem cupiditate accusamus impedit
          consequuntur accusamus libero officiis officia delectus
          exercitationem. Molestias itaque facilis quo commodi consequatur
          voluptatem nemo illum voluptate doloremque accusamus libero officia
          perferendis! Illo maxime alias hic consequuntur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Possimus, temporibus!
        </p>
      </div>
      <div className="pl-list">
        {projects.map((project) => (
          <Project key={project.id} img={project.img} link={project.link} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
