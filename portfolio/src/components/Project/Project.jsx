import "./Project.css";

const Project = ({ img, link, name, sourceCode }) => {
  return (
    <div className="project-container">
      <div className="p-browser">
        <div className="p-circle first"></div>
        <div className="p-circle second"></div>
        <div className="p-circle third"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="project screenshot" className={name} />
      </a>
      <a
        href={sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <div className="icon-wrapper">
          <span className={`p-text`}>Github</span>
          <img
            src="./github_pin_logo.png"
            alt="GitHub icon"
            className="github-icon"
          />
        </div>
      </a>
    </div>
  );
};

export default Project;
