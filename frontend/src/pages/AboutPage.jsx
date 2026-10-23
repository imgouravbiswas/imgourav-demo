import SectionHeading from '../components/SectionHeading';

const educationItems = [
  {
    title: 'B.Tech in Computer Science & Engineering (AIML)',
    detail: 'JIS College of Engineering, West Bengal, India',
  },
  {
    title: 'Core Interests',
    detail: 'Machine learning, data-driven problem solving, Python development, and modern web technologies.',
  },
  {
    title: 'Career Focus',
    detail: 'Building practical software solutions and preparing for impactful work in AI, product engineering, and research-driven development.',
  },
];

function AboutPage() {
  return (
    <section className="section-block">
      <div className="container content-stack">
        <SectionHeading
          eyebrow="About Me"
          title="Curious learner with a strong interest in AI and software development"
          description="I enjoy learning by building, experimenting, and turning ideas into useful digital solutions."
        />

        <div className="two-column-layout">
          <div className="info-card">
            <h3>Background</h3>
            <p>
              I am a B.Tech CSE (AIML) student at JIS College of Engineering, based in West
              Bengal, India. My academic journey has shaped my interest in coding, data, and
              intelligent systems.
            </p>
            <p>
              I like exploring programming languages, understanding how software works end to end,
              and applying technology to real-world problems in a thoughtful, practical way.
            </p>
          </div>

          <div className="info-card">
            <h3>What I enjoy</h3>
            <ul className="list-inline">
              <li>Python development</li>
              <li>AI/ML concepts and projects</li>
              <li>Web applications</li>
              <li>Data analysis and problem solving</li>
              <li>Clean, user-focused interfaces</li>
            </ul>
          </div>
        </div>

        <div className="card-grid info-grid">
          {educationItems.map((item) => (
            <div key={item.title} className="info-card compact-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
