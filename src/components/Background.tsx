import sectionStyles from "../styles/Section.module.css";
import styles from "./Background.module.css";

function Background() {
  return (
    <section id="background" className={sectionStyles.section}>
      <h2>Background</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>Education</h3>
          <p className={styles.itemDescription}>
            B.Sc. in Computer Science, Technion – Israel Institute of Technology
            · 2018–2022
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>Leadership</h3>
          <p className={styles.itemDescription}>
            Commander Course Instructor, Israeli Air Defense · 2014–2017.
            Leadership, training, and operational responsibility.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>Languages</h3>
          <p className={styles.itemDescription}>
            Hebrew (native) · English (fluent)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Background;
