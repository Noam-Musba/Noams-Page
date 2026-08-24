import { skillGroups } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={sectionStyles.section}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <section className={styles.group} key={group.name}>
            <h3 className={styles.groupHeading}>{group.name}</h3>
            <ul className={styles.skillList}>
              {group.skills.map((skill) => (
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
