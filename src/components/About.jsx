import './About.css';
import { useState } from 'react';

const About = () => {

  return (
    <section id="about" className="about-section">
      <h2 className="about-section-title hover-effect">
        <span className="hover-text">About Me</span>
        <span className="hover-emoji">🙌</span>
      </h2>
      <div className="about-container">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img 
              src="/profile-picture.JPG" 
              alt="Chamindu Kasun"
              className="profile-image" 
            />
            <img 
              src="/Graduation.GIF" 
              alt="Cartoon Chamindu Kasun"
              className="profile-image-cartoon" 
            />
          </div>
          <h1 className="about-title">Chamindu Kasun Karunarathna</h1>
          <h3>Educator | Software Engineer</h3>
        </div>
        
        <div className="about-content">
<p className="about-description">
  Hi. I'm <strong>Chamindu Kasun Karunarathna</strong> — a dedicated <strong>Educator</strong> committed to making technology education 
  engaging, practical, and inspiring for students. I strive to bridge the gap between academic learning and 
  real-world applications in Information Technology. My focus is on helping students develop strong 
  analytical, critical thinking, and problem-solving skills that prepare them for the evolving world of technology.
</p>

          <div className="skills-container">
            <h4>My Services</h4>
            <div className="skills-grid">
              <span className="skill-tag">🎓 Lecturing - Information Technology</span>
              <span className="skill-tag">💡 Local | Edexcel A/L ICT Tutoring</span>
              <span className="skill-tag">💻 Software Development & Tech Guidance</span>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;