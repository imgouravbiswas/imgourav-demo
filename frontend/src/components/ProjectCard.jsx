import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className="project-tag">{project.category}</span>
        {project.featured && <span className="featured-tag">Featured</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="project-actions">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {!project.github_url && !project.live_url && (
          <Link to="/contact">Discuss this project</Link>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
