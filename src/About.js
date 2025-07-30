import React from "react";

const About = () => {
  const sectionStyle = {
    maxWidth: "800px",
    margin: "4rem auto",
    padding: "0 2rem",
    textAlign: "center",
  };

  const infoStyle = {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  const contactListStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
    fontSize: "1.1rem",
  };

  const contactItemStyle = {
    marginBottom: "0.7rem",
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2>About Me</h2>
      <p style={infoStyle}>
        Hello! I’m Kritika Neupane, a passionate software developer with experience
        in React, JavaScript, and full-stack web development. I love building
        beautiful and functional web applications.
      </p>

      <ul style={contactListStyle}>
        <li style={contactItemStyle}>
          <strong>Email:</strong>{" "}
          <a href="mailto:kritikaneu32@gmail.com">kritikaneu32@gmail.com</a>
        </li>
        <li style={contactItemStyle}>
          <strong>Phone:</strong> +977-9805817925
        </li>
        <li style={contactItemStyle}>
          <strong>Location:</strong> Pokhara, Nepal
        </li>
      </ul>
    </section>
  );
};

export default About;
