import { backgroundItems } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./Background.module.css";

function Background() {
  return (
    <section id="background" className={sectionStyles.section}>
      <h2>Background</h2>
      <div className={styles.grid}>
        {backgroundItems.map(({ description, heading }) => (
          <div className={styles.item} key={heading}>
            <h3 className={styles.itemHeading}>{heading}</h3>
            <p className={styles.itemDescription}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Background;
