import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3rem 2rem',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#ff4f81',
      marginBottom: '1.5rem',
      textDecoration: 'underline',
      textUnderlineOffset: '8px',
    },
    infoBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem 2rem',
      maxWidth: '400px',
      width: '100%',
      boxShadow: '0 4px 12px rgba(255, 79, 129, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '2rem',
    },
    infoItem: {
      marginBottom: '1rem',
      fontSize: '1.1rem',
      color: '#ccc',
    },
    label: {
      color: '#ff4f81',
      fontWeight: '600',
      marginRight: '0.5rem',
    },
    link: {
      color: '#ff4f81',
      textDecoration: 'none',
    },
    connectHeading: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#ff4f81',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
    },
    iconLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 79, 129, 0.2)',
      color: '#ff4f81',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    svg: {
      width: '24px',
      height: '24px',
      fill: 'currentColor',
    },
  };

  // Hover effect handlers
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#ff4f81';
    e.currentTarget.style.color = '#fff';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 79, 129, 0.2)';
    e.currentTarget.style.color = '#ff4f81';
  };

  return (
    <div style={styles.container} id="contact">
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.infoBox}>
        <p style={styles.infoItem}>
          <span style={styles.label}>Phone:</span>
          <a href="tel:+9779805817925" style={styles.link}>
            +977 9805817925
          </a>
        </p>

        <p style={styles.infoItem}>
          <span style={styles.label}>Email:</span>
          <a href="mailto:kritikaneu32@gmail.com" style={styles.link}>
            kritikaneu32@gmail.com
          </a>
        </p>

        <p style={styles.infoItem}>
          <span style={styles.label}>Location:</span>
          Pokhara, Nepal
        </p>
      </div>

      <div>
        <p style={styles.connectHeading}>Connect with me</p>
        <div style={styles.socialLinks}>
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/kritikaneupane9"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={styles.svg}
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.25-3.25-.12-.3-.54-1.5.12-3.12 0 0 1.02-.33 3.35 1.24a11.54 11.54 0 016.09 0c2.33-1.57 3.35-1.24 3.35-1.24.66 1.62.24 2.82.12 3.12.78.85 1.25 1.93 1.25 3.25 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.3c0 .32.21.69.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/kritika-neupane-0b83662a0/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={styles.svg}
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.851-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.352V9h3.415v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.6 0 4.267 2.368 4.267 5.448v6.294zM5.337 7.433a2.07 2.07 0 11-.001-4.139 2.07 2.07 0 010 4.139zM6.816 20.452H3.858V9h2.958v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.224.792 24 1.771 24h20.451c.979 0 1.778-.776 1.778-1.729V1.729C24 .775 23.204 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
