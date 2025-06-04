import './Skills.css';

interface Skill {
  id: number;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const skillsList: Skill[] = [
  {
    id: 1,
    name: "Web Development",
    description: "HTML, CSS, JavaScript, React",
    level: "Advanced"
  },
  {
    id: 2,
    name: "Mobile Development",
    description: "React Native, Flutter",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Backend Development",
    description: "Node.js, Express, MongoDB",
    level: "Advanced"
  }
];

const Skills = () => {
  return (
    <div className="skills-page">
      <h1>Our Skills</h1>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <span className={`level ${skill.level.toLowerCase()}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
