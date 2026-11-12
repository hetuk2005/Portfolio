import "../Style/bentoHome.css";
import { Navbar } from "./navbar";

export const BentoHome = () => {
  return (
    <>
      <Navbar />

      <section className="bento-layout">
        {/* Main Hero Card */}
        <div className="bento-card bento-hero">
          <div className="bento-window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="bento-hero-copy">
            <h1 className="bento-hello">Hi! I'm</h1>
            <h1 className="bento-name">Hetuk</h1>

            <div className="bento-underline"></div>

            <p>
              Front-End Developer skilled in building responsive web
              applications with HTML, CSS, JavaScript, React, Redux, and REST
              APIs, with a focus on reusable UI, performance, and smooth user
              experiences.
            </p>

            <button className="bento-button">Hire Me →</button>
          </div>

          <div className="bento-person">
            <img src="/Ring.svg" alt="" className="bento-ring" />
            <img
              src="/Person.svg"
              alt="3D developer character"
              className="bento-character"
            />
          </div>
        </div>

        {/* Skills Card */}
        <div className="bento-card bento-skills">
          <h2>
            <span className="bento-heading-icon">&lt;/&gt;</span> My Skills
          </h2>

          <div className="bento-skills-grid">
            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/React.svg" alt="React" />
              </div>
              <span>React</span>
            </div>

            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/JS.svg" alt="JavaScript" />
              </div>
              <span>JavaScript</span>
            </div>

            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/HTML5.svg" alt="HTML" />
              </div>
              <span>HTML</span>
            </div>

            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/CSS3.svg" alt="CSS3" />
              </div>
              <span>CSS</span>
            </div>

            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/Github.svg" alt="Github" />
              </div>
              <span>GitHub</span>
            </div>

            <div className="bento-skill">
              <div className="skill-icon">
                <img src="/Redux.svg" alt="Redux" />
              </div>
              <span>Redux</span>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card bento-about">
          <h2>
            <span className="about-icon">♟</span> About Me
          </h2>

          <p>
            Passionate Front-End Developer who loves turning ideas into
            beautiful and responsive web experiences.
          </p>

          <button className="bento-button bento-about-button">
            Learn More →
          </button>

          <div className="bento-code-art">&lt;/&gt;</div>
        </div>
      </section>
    </>
  );
};
