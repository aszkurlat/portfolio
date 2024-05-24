import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { ThemeProvider } from "./context.js";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
