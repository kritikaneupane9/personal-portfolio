import React from 'react';

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: linear-gradient(to right, #fceff9, #e9f4fb); /* Soft pink to light blue */
          color: #333;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 999;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #b288c0; /* Soft purple */
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #4a4a4a;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #b288c0; /* Hover matches logo color */
        }


        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            font-size: 1rem;
          }

          .logo {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Kritika</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


