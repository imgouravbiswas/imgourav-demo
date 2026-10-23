import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';
import { fetchFeaturedProjects } from '../api/portfolioApi';
import { useEffect, useState } from 'react';

function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const data = await fetchFeaturedProjects();
      setFeaturedProjects(data);
    };

    loadFeatured();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">B.Tech CSE (AIML) Student</span>
            <h1>Building useful AI, software, and problem-solving experiences.</h1>
            <p>
              Hi, I’m Gourav Biswas, a computer science engineering student passionate about
              machine learning, web development, and creating practical digital products.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="primary-button">
                View Projects
              </Link>
              <Link to="/contact" className="secondary-button">
                Contact Me
              </Link>
            </div>
            <div className="social-links">
              <a href="https://github.com/imgouravbiswas" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:your-email@example.com">Email</a>
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-card">
              <div className="profile-image-placeholder">
                <span>Profile Photo</span>
              </div>
              <div className="profile-details">
                <h3>Gourav Biswas</h3>
                <p>JIS College of Engineering, West Bengal, India</p>
                <a href="/resume.pdf" className="text-link">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects and experiments"
            description="A few of my recent explorations in AI, software development, and product thinking."
          />

          <div className="card-grid project-grid">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.id || project.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
