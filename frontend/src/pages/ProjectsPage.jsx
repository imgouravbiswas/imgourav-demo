import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api/portfolioApi';

const filters = ['All', 'Web App', 'AI/ML', 'Python', 'Frontend'];

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    loadProjects();
  }, []);

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => {
          const categories = [project.category, ...project.technologies];
          return categories.some((item) => item.toLowerCase().includes(activeFilter.toLowerCase()));
        });

  return (
    <section className="section-block">
      <div className="container content-stack">
        <SectionHeading
          eyebrow="Projects"
          title="Recent work, experiments, and learning projects"
          description="These projects reflect my focus on practical coding, web interfaces, and AI-powered problem solving."
        />

        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="card-grid project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
