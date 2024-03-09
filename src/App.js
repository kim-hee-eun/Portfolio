import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import AboutMe from "./Component/AboutMe";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Project from "./Component/Project";
import ProjectDetail from "./Component/ProjectDetail";
import Skills from "./Component/Skills";

function App() {
  return (
    <BrowserRouter>
      <header id="menu-bar">
        <div id="website-title">Hee Eun's Portfolio</div>

        <nav id="nav-container">
          <Link to="/" className="nav-menu">
            Home
          </Link>
          <Link to="/aboutme" className="nav-menu">
            About Me
          </Link>
          <Link to="/skills" className="nav-menu">
            Skills
          </Link>
          <Link to="/project" className="nav-menu">
            Project
          </Link>
          <Link to="/login" className="nav-menu">
            Login
          </Link>
        </nav>
      </header>
      <main id="mainContents-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:projectTitle" element={<ProjectDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer>
        <i>Copyright 2023. heeeun all rights reserved </i>
        <span>😃</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;
