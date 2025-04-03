import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Profile.css';
import profileImg from '../assets/profile.jpg';

const Profile = () => {
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    api.get('/professor')
      .then(res => setProfessor(res.data))
      .catch(err => console.error('❌ API error:', err));
  }, []);

  if (!professor) return <p style={{ padding: '20px' }}>Loading profile...</p>;

  return (
    <div className="profile-container">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="profile-header" id="home">
  <img src={profileImg} alt="Professor" className="profile-image" />
  <h1>{professor.name}</h1>
  <h2>{professor.title}</h2>
  <p className="bio">{professor.biography}</p>
</header>


      <section id="research">
        <h3>Research Interests</h3>
        <ul>
          {professor.researchInterests.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="publications">
        <h3>Publications</h3>
        <ul>
          {professor.publications.map((pub, index) => (
            <li key={index}>
              <strong>{pub.title}</strong> ({pub.year})<br />
              <em>{pub.journal}</em><br />
              <a href={pub.link} target="_blank" rel="noreferrer">Read</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="courses">
        <h3>Courses</h3>
        <ul>
          {professor.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <p>Email: <a href={`mailto:${professor.contact.email}`}>{professor.contact.email}</a></p>
        <p>Website: <a href={professor.contact.website} target="_blank" rel="noreferrer">View Profile</a></p>
      </section>
    </div>
  );
};

export default Profile;
