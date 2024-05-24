import { useContext } from "react";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import ProjectList from "./components/ProjectList/ProjectList.jsx";
import ToggleMode from "./components/ToggleMode/ToggleMode.jsx";
import { ThemeContext } from "./context.js";

export function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <ToggleMode />
      <Header />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}
