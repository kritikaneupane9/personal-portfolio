import React, { useState } from 'react';

const ContactFormModern = () => {
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#f2f1e7',
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
      backgroundColor: '#f2f1e7',
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
      gap: '1.5rem',
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
      boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
    },
    label: {
      fontWeight: '700',
      marginBottom: '0.5rem',
      display: 'block',
      fontSize: '1rem',
      color: '#243b3b',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1.5px solid #243b3b',
      outline: 'none',
      color: '#243b3b',
      fontWeight: '500',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#86c232',
    },
    textarea: {
      width: '100%',
      minHeight: '100px',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1.5px solid #243b3b',
      outline: 'none',
      resize: 'vertical',
      color: '#243b3b',
      fontWeight: '500',
      transition: 'border-color 0.3s ease',
    },
    button: {
      width: '120px',
      padding: '0.75rem',
      backgroundColor: '#243b3b',
      color: '#f2f1e7',
      fontWeight: '700',
      fontSize: '1rem',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 6px 10px rgba(36,59,59,0.4)',
      alignSelf: 'flex-start',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#86c232',
      boxShadow: '0 6px 10px rgba(134,194,50,0.6)',
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
          <h1 style={styles.heading}>Get In Touch !</h1>
          <p style={styles.subheading}>
            Fill out the form and I will reach out, as soon as possible!
          </p>
          <img
            style={styles.illustration}
            src="https://cdn-icons-png.flaticon.com/512/2570/2570571.png"
            alt="Contact illustration"
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
            placeholder="youremail@meow.com"
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
            style={buttonHover ? {...styles.button, ...styles.buttonHover} : styles.button}
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

export default ContactFormModern;
