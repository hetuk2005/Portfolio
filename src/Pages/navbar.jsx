import "../Style/home.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/Logo.png" alt="Logo" className="img_logo" />
      <div className="nav_1">
        <div className="list">
          <ul className="point">Home</ul>
          <ul>Project</ul>
          <ul>Resume</ul>
        </div>
        <div className="hire_me">
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};
