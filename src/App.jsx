import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}

      {/* Navbar */}
      <div style={{ position: "fixed", bottom: 20, left: 20 }}>
        <button onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          Home
        </button>
        <button onClick={() => setPage("about")} style={{ cursor: "pointer" }}>
          About
        </button>
        <button
          onClick={() => setPage("projects")}
          style={{ cursor: "pointer" }}
        >
          Projects
        </button>
        <button
          onClick={() => setPage("contact")}
          style={{ cursor: "pointer" }}
        >
          Contact
        </button>
      </div>
    </>
  );
}

export default App;
