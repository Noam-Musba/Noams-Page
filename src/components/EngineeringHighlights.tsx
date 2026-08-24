import { engineeringHighlights } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./EngineeringHighlights.module.css";

function EngineeringHighlights() {
  return (
    <section id="engineering-highlights" className={sectionStyles.section}>
      <h2>Engineering highlights</h2>
      <div className={styles.grid}>
        {engineeringHighlights.map((highlight) => (
          <article className={styles.highlight} key={highlight.title}>
            <h3 className={styles.highlightHeading}>{highlight.title}</h3>
            <p className={styles.summary}>{highlight.summary}</p>
            <ul className={styles.technologies}>
              {highlight.technologies.map((technology) => (
                <li className={styles.technology} key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EngineeringHighlights;
