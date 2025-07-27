import React from 'react';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
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
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#ff4f81',
      textDecoration: 'underline',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.8',
      color: '#ccc',
      marginBottom: '1.5rem',
    },
    listBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '1rem',
      borderRadius: '12px',
      marginTop: '1.5rem',
      textAlign: 'left',
    },
    listTitle: {
      color: '#ff4f81',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    list: {
      color: '#ccc',
      paddingLeft: '1.2rem',
    },
  };

  return (
    <div style={styles.container} id="about">
      <div style={styles.content}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          I'm a frontend-focused BIT student from Nepal, passionate about clean UI and modern web tech like React and Python.
        </p>
        <p style={styles.paragraph}>
          I enjoy turning ideas into real, responsive apps and love learning new tools to stay sharp in tech.
        </p>

        <div style={styles.listBox}>
          <p style={styles.listTitle}>Tech Stack</p>
          <ul style={styles.list}>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS</li>
            <li>Python (Flask/Django)</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div style={styles.listBox}>
          <p style={styles.listTitle}>Hobbies</p>
          <ul style={styles.list}>
            <li>UI Design</li>
            <li>Blogging</li>
            <li>Photography</li>
            <li>Learning Tech</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
