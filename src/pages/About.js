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
      textAlign: 'left',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    content: {
      maxWidth: '700px',
      flexGrow: 1,
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
    },
    listTitle: {
      color: '#ff4f81',
      fontWeight: '600',
      marginBottom: '0.8rem',
      fontSize: '1.2rem',
    },
    skillList: {
      listStyle: 'none',
      paddingLeft: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      color: '#ccc',
      marginTop: '1rem',
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '1rem',
    },
    skillIcon: {
      width: '24px',
      height: '24px',
    },
  };

  const skills = [
    { name: 'HTML', icon: '/skills/html.png' },
    { name: 'CSS', icon: '/skills/css.png' },
    { name: 'JavaScript', icon: '/skills/js.png' },
    { name: 'Python', icon: '/skills/python.png' },
    { name: 'Git', icon: '/skills/git.png' },
    { name: 'GitHub', icon: '/skills/github.png' },
    { name: 'Figma', icon: '/skills/figma.png' },

  ];

  return (
    <div style={styles.container} id="about">
      <div style={styles.content}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          Hey, I'm Kritika Neupane — a passionate self-taught learner from Pokhara,Nepal. I love crafting clean, user-friendly designs and building smooth web experiences using React and modern web tools.
        </p>
        <p style={styles.paragraph}>
          I started my journey while studying BIT and have been exploring development ever since. I believe in simple design, clean code, and constant learning. I'm always excited to work on creative projects and improve my skills.
        </p>

        <div style={styles.listBox}>
          <p style={styles.listTitle}>Technical Skills</p>
          <ul style={styles.skillList}>
            {skills.map(skill => (
              <li key={skill.name} style={styles.skillItem}>
                <img src={skill.icon} alt={`${skill.name} icon`} style={styles.skillIcon} />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
