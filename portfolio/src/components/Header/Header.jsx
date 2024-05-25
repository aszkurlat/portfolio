import "./Header.css";
import personImg from "/photo1.png";

function Header() {
  return (
    <div className="header-container" id="header">
      <div className="header-left">
        <div className="header-left-wrapper">
          <h2 className="header-title">Hello, My name is</h2>
          <h1 className="header-name">Agnieszka Szkurłat</h1>
          <div className="header-roles">
            <div className="header-roles-wrapper">
              <div className="header-role-item">Frontend Developer</div>
              <div className="header-role-item">Web Developer</div>
              <div className="header-role-item">Content Creator</div>
            </div>
          </div>
          <div className="header-description">
            I build and design websites and web applications, focusing on making
            them visually appealing, user-friendly, and responsive across all
            devices. Ensuring fast performance, accessibility, and a seamless
            user experience is a top priority.
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-img-bg"></div>
        <img src={personImg} alt="" className="header-img" />
      </div>
    </div>
  );
}

export default Header;
