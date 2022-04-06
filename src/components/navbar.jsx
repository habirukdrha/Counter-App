import React, { Component } from "react";

// stateless functional components
const NavBar = ({ totalCounter }) => {
  console.log("navbar - renderd");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-pill bg-secondary">{totalCounter}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
