import React, { useContext } from "react";

import Intro from "./components/Intro";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList"
import projects from "./assets/data";
import ContactForm from "./components/Contact";
import Toggle from "./components/Toggle/toggle";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#D07632" : "white", color:darkMode && "white" }}>
      <Toggle/>
      <Intro />
      <About />
      <ProjectList projects={projects}></ProjectList>
      <ContactForm />
    </div>

  );
}

export default App;
