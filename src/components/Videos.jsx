import './Videos.css';
import videosData from '../data/videos.json';
import React, { useState } from 'react';

const Videos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = window.innerWidth <= 768 ? 4 : 12;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videosData.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title">Tutorials</h2>
      <div className="videos-container">
        {currentVideos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              src={video.link.replace('youtu.be/', 'www.youtube.com/embed/')}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(videosData.length / videosPerPage) }, (_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Videos;