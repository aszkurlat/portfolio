import "./ToggleMode.css";
import sun from "/sun.png";
import moon from "/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context.js";

const ToggleMode = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle-mode-container">
      <img src={sun} alt="toggle-icon" className="toggle-icon" />
      <img src={moon} alt="toggle-icon" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 30 }}
      ></div>
    </div>
  );
};

export default ToggleMode;
