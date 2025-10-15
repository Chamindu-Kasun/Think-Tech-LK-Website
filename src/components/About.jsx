import './About.css';

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
              src="/Think-Tech-LK.PNG" 
              alt="Cartoon Chamindu Kasun"
              className="profile-image-cartoon" 
            />
          </div>
          <h1 className="about-title">Chamindu Kasun Karunarathna</h1>
          <h3>Educator | Software Engineer</h3>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            Welcome to my portfolio! I'm Chamindu Kasun, a passionate Software Engineer and Educator.
            Through my brand, <strong>ThinkTechLK</strong>, I aim to inspire and educate others about
            technology and software development. I create engaging YouTube videos and write insightful
            Medium articles to share knowledge and empower learners worldwide.
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