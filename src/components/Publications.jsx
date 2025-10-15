import React, { useState } from "react";
import "./Publications.css";
import publicationsData from "../data/publications.json";

const Publications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = window.innerWidth <= 768 ? 4 : 12;

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = publicationsData.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="publications" className="publications-section">
      <h2 className="section-title">Publications</h2>
      <div className="publications-container">
        {currentPublications.map((publication, index) => (
          <div key={index} className="publication-item">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              <img
                src={publication.image}
                alt={publication.title}
                className="publication-image"
              />
              <p>{publication.title}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(publicationsData.length / publicationsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Publications;
