import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">KN</h1>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',color: '#fff',
          
          font-family: Arial, sans-serif;
        }

        .logo {
          font-family: 'Dancing Script', cursive;
          font-size: 32px;
          font-weight: bold;
          color: #26494d;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          color: #26494d;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 4px;
          transition: background-color 0.3s, color 0.3s;
        }

        .nav-links li a:hover {
          background-color: #ff8c00;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Navbar;
