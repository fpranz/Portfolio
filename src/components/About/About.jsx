import React from 'react';
import './About.css';
import certificates from '../../assets/certificates/Certificates'; // Importing certificates data
import my_pic from '../../assets/icons/my_pic.jpg'; 

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          {/* Profile picture */}
          <img src={my_pic} alt="My Pic" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              Hello! I am <strong>Franz Patrick Lariba</strong>, an aspiring software developer.
              I recently graduated with a Bachelor of Science in Computer Science degree from
              Batangas State University NEU JPLPC - Malvar.
            </p>
          </div>
          <div className="about-skills">
            {/* Shows the skills section with progress bars */}
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"55%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>C# & C++</p><hr style={{width:"20%"}}/></div>
            <div className="about-skill"><p>MySQL & Firebase</p><hr style={{width:"25%"}}/></div>
            <div className="about-skill"><p>Git & Github</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>

      <section className="certificates">
        <h2>Certificates</h2>
        <ul>
          {/* Map/Search through the certificates data and display each certificate */}
          {certificates.map((cert, index) => (
            <li key={index}>
              <strong>{cert.title}</strong> from {cert.issuer} ({cert.year})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
