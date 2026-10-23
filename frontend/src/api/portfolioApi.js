const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A professional personal portfolio website with responsive UI and a modern user experience.',
    category: 'Web App',
    technologies: ['React', 'FastAPI', 'SQLite'],
    featured: true,
    github_url: 'https://github.com/imgouravbiswas',
    live_url: 'https://example.com',
  },
  {
    id: 2,
    title: 'AI Learning Tracker',
    description: 'A lightweight application to track learning progress and experiments in machine learning concepts.',
    category: 'AI/ML',
    technologies: ['Python', 'SQL', 'ML'],
    featured: true,
    github_url: 'https://github.com/imgouravbiswas',
    live_url: '',
  },
  {
    id: 3,
    title: 'Task Dashboard',
    description: 'A simple productivity dashboard for managing tasks, goals, and progress in a clean interface.',
    category: 'Frontend',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
    github_url: 'https://github.com/imgouravbiswas',
    live_url: '',
  },
];

export async function fetchProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const data = await response.json();
    return data;
  } catch (error) {
    return FALLBACK_PROJECTS;
  }
}

export async function fetchFeaturedProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/featured`);
    if (!response.ok) throw new Error('Failed to fetch featured projects');
    const data = await response.json();
    return data;
  } catch (error) {
    return FALLBACK_PROJECTS.filter((project) => project.featured);
  }
}

export async function fetchSkills() {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`);
    if (!response.ok) throw new Error('Failed to fetch skills');
    const data = await response.json();
    return data;
  } catch (error) {
    return [
      { category: 'Languages', items: ['Python', 'C++', 'C', 'JavaScript', 'HTML', 'CSS'] },
      { category: 'Data & AI', items: ['NumPy', 'SQL', 'AI/ML'] },
    ];
  }
}
