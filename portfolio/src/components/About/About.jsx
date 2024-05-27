import "./About.css";
import aboutMe from "/about_me.png";

function About() {
  return (
    <div className="about-container" id="about">
      {/* left side */}
      <div className="about-left">
        <div className="about-card">
          <img src={aboutMe} alt="person image" className="about-img" />
        </div>
      </div>
      {/* right side */}
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-desc">
          Hi! I'm Agnieszka, a dedicated front-end developer based in Warsaw,
          Poland. With a keen eye for detail and a passion for crafting
          immersive digital experiences, I specialize in leveraging cutting-edge
          technologies such as React and other front-end tools to bring designs
          to life. From building responsive layouts to optimizing user
          interactions, I am committed to creating intuitive and impactful web
          solutions that elevate brands and delight users.
        </p>
        <p className="about-tech-skills">
          <p className="about-tech-skills">Technical Skills:</p>
        </p>
        <div className="about-skills">
          <img src="/html.png" alt="" className="about-skill-img" />
          <img src="css.png" alt="" className="about-skill-img" />
          <img src="/js.png" alt="" className="about-skill-img" />
          <img src="/react.png" alt="" className="about-skill-img" />
          <img src="/node.png" alt="" className="about-skill-img" />
          <img src="/git.png" alt="" className="about-skill-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
