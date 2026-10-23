function SkillBadge({ name, level = 'Core' }) {
  return (
    <div className="skill-badge">
      <span>{name}</span>
      <small>{level}</small>
    </div>
  );
}

export default SkillBadge;
