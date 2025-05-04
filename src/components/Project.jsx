// src/components/Projects.jsx
import './Project.css';

function Project() {
  return (
    <section id="project" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>A personal website to showcase my skills, projects, and contact information. Built with React and CSS.</p>
        </div>
        <div className="project-item">
          <h3>Task Manager App</h3>
          <p>A simple task management app to track daily tasks. Built with React and Node.js.</p>
        </div>
        <div className="project-item">
          <h3>Weather App</h3>
          <p>An app that displays weather information for different cities using a public API. Built with JavaScript and OpenWeather API.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;
