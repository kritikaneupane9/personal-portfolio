import React from 'react';

const Home = () => {
  const styles = {
    container: {
      height: '100vh',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
    },
    content: {
      maxWidth: '700px',
      animation: 'fadeIn 1s ease-in-out',
    },
    image: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      border: '4px solid #ff4f81',
      objectFit: 'cover',
      marginBottom: '1.5rem',
      transition: 'transform 0.3s ease',
    },
    name: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    nameSpan: {
      color: '#ff4f81',
    },
    title: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#ccc',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    btn: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    primaryBtn: {
      backgroundColor: '#ff4f81',
      color: '#fff',
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      border: '2px solid #ff4f81',
      color: '#ff4f81',
    },
  };

  return (
    <div style={styles.container} id="home">
      <div style={styles.content}>
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Kritika Neupane"
          style={styles.image}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Name and Title */}
        <h1 style={styles.name}>
          Hi, I'm <span style={styles.nameSpan}>Kritika Neupane</span>
        </h1>
        <p style={styles.title}>Frontend Developer & Python Enthusiast</p>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <a href="/Kritika-Resume.pdf" download>
            <button style={{ ...styles.btn, ...styles.primaryBtn }}>
              Download Resume
            </button>
          </a>
          <a href="#contact">
            <button style={{ ...styles.btn, ...styles.secondaryBtn }}>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
