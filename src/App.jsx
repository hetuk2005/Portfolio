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
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "projects" && <Projects setPage={setPage} />}
      {page === "contact" && <Contact setPage={setPage} />}

      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: "31px",
          left: "51px",
          display: "flex",
          gap: "21px",
        }}
        className="navbar"
      >
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("projects")}>Projects</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>
    </>
  );
}

export default App;
