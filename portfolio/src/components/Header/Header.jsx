import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header-container" id="home">
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}
      >
        <nav className={`nav ${menuOpened ? "" : "active"}`}>
          <ul className="nav-menu">
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item" onClick={() => setMenuOpened(false)}>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </OutsideClickHandler>
      <div
        className={"header-menu " + (menuOpened && "active")}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

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
        <img src="/person.png" alt="" className="header-img" />
      </div>
    </div>
  );
}

export default Header;
