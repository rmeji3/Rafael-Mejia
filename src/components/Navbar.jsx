import React from "react";

function Navbar() {
  return (
    <nav
      className="d-flex align-items-center text-white px-3 px-md-5"
      style={{
        backgroundColor: "#0C0F19",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "4rem",
      }}
    >
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn btn-link text-white text-decoration-none border-0"
        style={{ fontSize: "1rem", cursor: "pointer" }}
      >
        Rafael Mejia
      </a>
    </nav>
  );
}

export default Navbar;
