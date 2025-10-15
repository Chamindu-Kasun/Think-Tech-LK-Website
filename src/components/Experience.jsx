import React, { useState } from 'react';
import './Experience.css';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-section-title">Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="duration">{item.duration}</p>
              <h3 className="title">{item.title}</h3>
              <p className="organization">{item.organization}</p>
              {item.type === "Academic" ? (
              <button className="show-more" onClick={() => openModal(item)}>
                Show More
              </button>
              ) : (<></>)}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{modalContent.organization}</h3>
            <img src={modalContent.image} alt={modalContent.organization} className="modal-image" />
            <p className="modal-duration">Service Time: {modalContent.duration}</p>
            
            <ul className="responsibilities">
              <p className="responsibilities-title">Subjects Taught:</p>
              {modalContent.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;