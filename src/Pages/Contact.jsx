import React from "react";

export const Contact = ({ setPage }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "31px 0" }}>Contact Page</h2>
      <button className="home" onClick={() => setPage("home")}>
        Back To Home
      </button>
    </>
  );
};
