import { skillGroups } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={sectionStyles.section}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        {skillGroups.map(({ name, skills }) => (
          <section className={styles.group} key={name}>
            <h3 className={styles.groupHeading}>{name}</h3>
            <ul className={styles.skillList}>
              {skills.map((skill) => (
                <li className={styles.skill} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
