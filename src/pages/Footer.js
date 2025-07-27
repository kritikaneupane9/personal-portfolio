import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#f2f1e7',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    profilePic: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
      border: '3px solid #86c232',
    },
    icons: {
      display: 'flex',
      gap: '1.5rem',
      margin: '1rem 0',
    },
    icon: {
      width: '28px',
      height: '28px',
      transition: 'transform 0.3s',
      cursor: 'pointer',
      filter: 'invert(100%)', // invert icon colors for better contrast on dark bg
    },
    iconHover: {
      transform: 'scale(1.2)',
    },
    copyright: {
      fontSize: '0.9rem',
      marginTop: '1rem',
      color: '#ccc',
    },
  };
  const socialLinks = {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    instagram: 'https://instagram.com/your-handle',
  };

  return (
    <footer style={styles.footer}>
      <img
        src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.15752-9/521530734_3686224481681570_7969858611760500048_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=qsE-SQuh3j8Q7kNvwEnoySb&_nc_oc=AdlPUvNt8g_AeIUfWH3urIZAu__1mMMHO_Bg62AVnFVMgP7lLHF8GhIpsDanGgwyMw4&_nc_ad=z-m&_nc_cid=5011&_nc_zt=23&_nc_ht=scontent.fpkr1-1.fna&oh=03_Q7cD2wHoYeSdbwXBkuj-T7pNvqm_a7ykxgxKonfGLKWvyvCHSg&oe=68AD8C5C" // Replace with your real photo URL or import
        alt="Your Profile"
        style={styles.profilePic}
      />

      <div style={styles.icons}>
  <a href="https://github.com/kritikaneupane9" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="GitHub"
      style={styles.icon}
    />
  </a>
  <a href="https://www.linkedin.com/in/kritika-neupane-0b83662a0/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      alt="LinkedIn"
      style={styles.icon}
    />
  </a>
  <a href="https://www.instagram.com/kkritikss/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      style={styles.icon}
    />
  </a>
</div>


      <p style={styles.copyright}>
        © {new Date().getFullYear()} Kritika Neupane. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
