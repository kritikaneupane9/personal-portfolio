import React, { useState } from 'react';

const ContactForm = () => {
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#243b3b',
    },
    container: {
      display: 'flex',
      maxWidth: '900px',
      width: '100%',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    leftSide: {
      flex: 1,
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1rem',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '900',
      marginBottom: '0',
      lineHeight: 1.1,
    },
    subheading: {
      fontSize: '1rem',
      color: '#4a5c5c',
      marginTop: '0',
    },
    illustration: {
      marginTop: '2rem',
      maxWidth: '250px',
      maxHeight: '250px',
      alignSelf: 'center',
    },
    rightSide: {
      flex: 1,
      backgroundColor: '#fff',
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
      boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
    },
    label: {
      fontWeight: '700',
      marginBottom: '0.3rem',
      display: 'block',
      fontSize: '0.95rem',
      color: '#243b3b',
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      fontSize: '0.95rem',
      borderRadius: '6px',
      border: '1.2px solid #243b3b',
      outline: 'none',
      color: '#243b3b',
      fontWeight: '500',
      transition: 'border-color 0.3s ease',
    },
    textarea: {
      width: '100%',
      minHeight: '60px',
      padding: '0.5rem 0.75rem',
      fontSize: '0.95rem',
      borderRadius: '6px',
      border: '1.2px solid #24243e',
      outline: 'none',
      resize: 'vertical',
      color: '#24243e',
      fontWeight: '500',
      transition: 'border-color 0.3s ease',
    },
    button: {
      width: '100px',
      padding: '0.5rem',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#f2f1e7',
      fontWeight: '700',
      fontSize: '0.9rem',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(36,59,59,0.4)',
      alignSelf: 'flex-start',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#86c232',
      boxShadow: '0 4px 10px rgba(134,194,50,0.6)',
    },
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [buttonHover, setButtonHover] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for getting in touch! (You can add backend integration here.)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <h1 style={styles.heading}>Get In Touch!</h1>
          <p style={styles.subheading}>
            Fill out the form and I will reach out, as soon as possible!
          </p>
          <img
            style={styles.illustration}
            src="https://cdn-icons-png.flaticon.com/512/4712/4712034.png"
            alt="Support agent illustration"
          />
        </div>

        <form style={styles.rightSide} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            style={styles.input}
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label style={styles.label} htmlFor="email">Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label style={styles.label} htmlFor="message">Message</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            style={buttonHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
