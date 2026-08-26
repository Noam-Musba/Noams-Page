import { sideQuestItems } from "../data/portfolio";
import type { SideQuestItem } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import styles from "./SideQuests.module.css";

function SideQuests() {
  return (
    <section
      id="side-quests"
      className={sectionStyles.section}
      aria-labelledby="side-quests-heading"
    >
      <div className={styles.introduction}>
        <span className={styles.kicker}>Beyond the résumé</span>
        <h2 className={styles.heading} id="side-quests-heading">
          Side Quests
        </h2>
        <p className={styles.description}>
          Software engineering is the main quest. Here’s what’s happening in the
          background.😎
        </p>
      </div>

      <div className={styles.grid}>
        {sideQuestItems.map((sideQuest) => (
          <SideQuestCard key={sideQuest.title} sideQuest={sideQuest} />
        ))}
      </div>
    </section>
  );
}

type SideQuestCardProps = {
  sideQuest: SideQuestItem;
};

function SideQuestCard({ sideQuest }: SideQuestCardProps) {
  const { action, chips, description, label, title, updates } = sideQuest;

  return (
    <article className={styles.card}>
      <span className={styles.kicker}>{label}</span>
      <h3 className={styles.cardHeading}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action && (
        <a className={styles.cardAction} href={action.href}>
          {action.label}
        </a>
      )}
      {chips && (
        <ul className={styles.chips} aria-label={chips.label}>
          {chips.items.map((item) => (
            <li className={styles.chip} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {updates && (
        <ul className={styles.latelyList}>
          {updates.map(({ description: update, icon, label: updateLabel }) => (
            <li className={styles.latelyItem} key={updateLabel}>
              <span aria-hidden="true">{icon}</span>
              <span>
                <span className={styles.updateLabel}>{updateLabel}:</span>{" "}
                {update}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default SideQuests;
