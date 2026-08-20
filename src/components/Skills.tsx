import { skillGroups } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <h2>Skills</h2>
      {skillGroups.map((group) => (
        <section className="skill-group" key={group.name}>
          <h3>{group.name}</h3>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

export default Skills;
