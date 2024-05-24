import "./Project.css";

const Project = ({ img, link }) => {
  return (
    <div className="project-container">
      <div className="p-browser">
        <div className="p-circle first"></div>
        <div className="p-circle second"></div>
        <div className="p-circle third"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Project;
