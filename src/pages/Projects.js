import React from 'react';

const Projects = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      padding: '4rem 2rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#ff4f81',
      textDecoration: 'underline',
      marginBottom: '1rem',
    },
    subtitle: {
      color: '#ccc',
      marginBottom: '2rem',
      fontSize: '1.1rem',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      maxWidth: '600px',
      width: '100%',
      textAlign: 'left',
      boxShadow: '0 4px 12px rgba(255, 79, 129, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.03)',
      boxShadow: '0 6px 20px rgba(255, 79, 129, 0.4)',
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#ff4f81',
      marginBottom: '0.5rem',
    },
    description: {
      color: '#ccc',
      marginBottom: '1rem',
    },
    link: {
      color: '#ff4f81',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container} id="projects">
      <h2 style={styles.heading}>My Projects</h2>
      <p style={styles.subtitle}>Here is a featured project I've recently built.</p>

      <div
        style={styles.card}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.card)}
      >
        <h3 style={styles.projectTitle}>Personal Portfolio Website</h3>
        <p style={styles.description}>
          A responsive portfolio website built with React.js and custom CSS to showcase my skills, projects, and contact info. Designed with a modern layout and smooth interactions.
        </p>
        <a
          href="https://github.com/kritikaneupane9/personal-portfolio"
          rel="noopener noreferrer"
          style={styles.link}
          target="_blank"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Projects;
