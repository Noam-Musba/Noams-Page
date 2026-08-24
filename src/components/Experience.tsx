import sectionStyles from "../styles/Section.module.css";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={sectionStyles.section}>
      <h2>Professional experience</h2>
      <article className={styles.role}>
        <div className={styles.roleHeading}>
          <h3 className={styles.roleTitle}>Software Engineer · Wix / Dazl</h3>
          <p className={styles.period}>2023–2026</p>
        </div>
        <p className={styles.description}>
          Transitioned with the same team and product when Dazl spun out of Wix
          as an independent startup in 2026.
        </p>
        <p className={styles.description}>
          Built React and TypeScript product features while owning work across
          automated testing, CI/CD, observability, and AWS infrastructure.
        </p>
      </article>
    </section>
  );
}

export default Experience;
