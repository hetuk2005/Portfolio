import React from "react";

import "../App.css";

export const Projects = ({ setPage }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "51px 21px",
          letterSpacing: "1.5px",
          fontSize: "41px",
          color: "#f1b555",
        }}
      >
        My Projects
      </h1>
      <section className="section06">
        <div className="card_container">
          {/* Card 01 */}

          <div className="card_box_1">
            <div className="card">
              <img src="/anime_Website_Screenshot.png" alt="Website 1" />
              <div className="card_info">
                <h1>Title</h1>
                <h3>Description</h3>
                <button className="card_btn">View Project</button>
              </div>
            </div>
          </div>

          {/* Card 02 */}

          <div className="card_box_2">
            <div className="card">
              <img src="/chai_Point_Screenshot.png" alt="Website 2" />
              <div className="card_info">
                <h1>Title</h1>
                <h3>Description</h3>
                <button className="card_btn">View Project</button>
              </div>
            </div>
          </div>

          {/* Card 03 */}

          <div className="card_box_1">
            <div className="card">
              <img src="hetuk_restaurant.png" alt="Website 2" />
              <div className="card_info">
                <h1>Title</h1>
                <h3>Description</h3>
                <button className="card_btn">View Project</button>
              </div>
            </div>
          </div>

          {/* Card 03 */}

          <div className="card_box_1">
            <div className="card">
              <img src="hetuk_restaurant.png" alt="Website 2" />
              <div className="card_info">
                <h1>Title</h1>
                <h3>Description</h3>
                <button className="card_btn">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button className="home" onClick={() => setPage("home")}>
        Back To Home
      </button>
    </>
  );
};
