import "../Style/clayHome.css";
import { Navbar } from "./navbar";

export const ClayHome = () => {
  return (
    <div className="clay-home">
      <div className="clay-decoration clay-heart">♡</div>
      <div className="clay-decoration clay-code">&lt;/&gt;</div>

      <main className="clay-container">
        <Navbar />

        <section className="clay-hero">
          <div className="clay-content">
            <h1 className="clay-hello">Hi! I'm</h1>

            <h1 className="clay-name">Hetuk</h1>

            <p>
              Front-End Developer skilled in building responsive web <br />
              applications with HTML, CSS, JavaScript, React, Redux, <br /> and
              REST APIs, with a focus on reusable UI, performance, <br />
              and smooth user experiences.
            </p>

            <button className="clay-hire-button">
              <span className="clay-arrow">→</span>
              <span>Hire Me</span>
            </button>
          </div>

          <div className="clay-person">
            <img src="/Ring.svg" alt="" className="clay-ring" />

            <img
              src="/Person.svg"
              alt="Developer illustration"
              className="clay-person-image"
            />
          </div>
        </section>
      </main>
    </div>
  );
};
