import './Education.css';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-cards">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">
              <img src={item.logo_image} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-duration">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="education-timeline-row"></div>
    </section>
  );
};

export default Education;