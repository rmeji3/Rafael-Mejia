import React from "react";

function Navbar() {


  return (
    <nav
      className="d-flex align-items-center text-white"
      style={{
        backgroundColor: "#0C0F19",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        marginLeft: '-7rem', 
        marginRight: '-7rem',
        width: '100%',
        height: '4rem',
      }}
    >
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn btn-link text-white text-decoration-none"
        style={{ fontSize: "1rem", paddingLeft: '7rem'}}
      >
        Rafael Mejia
      </a>
    </nav>
  );
}

export default Navbar;
