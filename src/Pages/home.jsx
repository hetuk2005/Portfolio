import "../Style/home.css";
import { Navbar } from "./navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_content">
        <h1 className="hello">Hi! I'm</h1>
        <h1 className="name">Hetuk</h1>
        <p>
          Front-End Developer skilled in building responsive web <br />
          applications with HTML, CSS, JavaScript, React, Redux, <br /> and REST
          APIs, with a focus on reusable UI, performance, <br />
          and smooth user experiences.
        </p>
        <button>Hire Me</button>
      </div>
      <div className="person">
        <img src="/Person.svg" alt="Person" className="img_person" />
        <img src="/Ring.svg" alt="Ring" className="img_ring" />
      </div>
    </>
  );
};
