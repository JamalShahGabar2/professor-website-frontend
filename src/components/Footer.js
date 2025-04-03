import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dr. Ghulam Dastgir Khan | 
        <a href="mailto:gdkhan@hiroshima-u.ac.jp"> Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
