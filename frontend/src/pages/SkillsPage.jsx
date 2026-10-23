import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import { fetchSkills } from '../api/portfolioApi';

const fallbackSkills = [
  { category: 'Languages', items: ['Python', 'C++', 'C', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Data & AI', items: ['NumPy', 'SQL', 'AI/ML'] },
];

function SkillsPage() {
  const [skillGroups, setSkillGroups] = useState(fallbackSkills);

  useEffect(() => {
    const loadSkills = async () => {
      const data = await fetchSkills();
      if (data.length) {
        setSkillGroups(data);
      }
    };

    loadSkills();
  }, []);

  return (
    <section className="section-block">
      <div className="container content-stack">
        <SectionHeading
          eyebrow="Skills"
          title="Tools, languages, and technologies I’m learning and using"
          description="Focused on computer science fundamentals, AI/ML workflows, and practical web development."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="info-card skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-badges">
                {group.items.map((item) => (
                  <SkillBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
