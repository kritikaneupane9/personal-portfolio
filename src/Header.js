import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="container">
        <div className="logo">Kritika Neupane</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
const headerStyle = {
  backgroundColor: "#222",
  color: "white",
  padding: "1rem 0",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  marginRight: "1.5rem",
};

const Header = () => (
  <header style={headerStyle}>
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", cursor: "default" }}>Kritika Neupane</div>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
          <li><a href="#home" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
          <li><a href="#experience" style={navLinkStyle}>Experience</a></li>
          <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);
