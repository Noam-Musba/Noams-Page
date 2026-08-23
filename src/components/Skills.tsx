import { skillGroups } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={sectionStyles.section}>
      <h2>Skills</h2>
      {skillGroups.map((group) => (
        <section className={styles.group} key={group.name}>
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
