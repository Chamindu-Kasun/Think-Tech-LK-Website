import './Articles.css';
import articlesData from '../data/articles.json';
import React, { useState } from 'react';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = window.innerWidth <= 768 ? 4 : 12;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="articles" className="articles-section">
      <h2 className="section-title">Articles</h2>
      <div className="articles-container">
        {currentArticles.map((article, index) => (
          <div key={index} className="article-item">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <img src={article.image} alt={article.title} className="article-image" />
              <p>{article.title}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(articlesData.length / articlesPerPage) }, (_, index) => (
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

export default Articles;