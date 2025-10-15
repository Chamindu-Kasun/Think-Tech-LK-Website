import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A brief description of the first project.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A brief description of the second project.</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>A brief description of the third project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;