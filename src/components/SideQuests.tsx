import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { sideQuestItems } from "../data/portfolio";
import type { SideQuestItem, SideQuestTone } from "../data/portfolio";
import sectionStyles from "../styles/Section.module.css";
import Quiz from "./Quiz";
import styles from "./SideQuests.module.css";

function SideQuests() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const quizButtonRef = useRef<HTMLButtonElement>(null);
  const quizHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isQuizOpen) {
      quizHeadingRef.current?.focus();
    }
  }, [isQuizOpen]);

  const closeQuiz = () => {
    setIsQuizOpen(false);
    quizButtonRef.current?.focus();
  };

  const toggleQuiz = () => {
    if (isQuizOpen) {
      closeQuiz();
    } else {
      setIsQuizOpen(true);
    }
  };

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
        <p className={[styles.description, styles.introductionText].join(" ")}>
          Software engineering is the main quest. Here’s what’s happening in the
          background.😎
        </p>
      </div>

      <div className={styles.grid}>
        {sideQuestItems.map((sideQuest) => (
          <SideQuestCard
            isQuizOpen={isQuizOpen}
            key={sideQuest.title}
            onQuizToggle={toggleQuiz}
            quizButtonRef={quizButtonRef}
            sideQuest={sideQuest}
          />
        ))}
      </div>

      {isQuizOpen && (
        <section
          id="side-quest-quiz"
          className={styles.quizPanel}
          aria-labelledby="side-quest-quiz-heading"
        >
          <div className={styles.quizPanelHeader}>
            <div>
              <span className={styles.kicker}>Quick quiz</span>
              <h3
                id="side-quest-quiz-heading"
                className={styles.quizPanelHeading}
                ref={quizHeadingRef}
                tabIndex={-1}
              >
                Ready? Let’s see how you do.
              </h3>
              <p className={styles.description}>
                Right answer: 10 points. Wrong answer: minus 2.
              </p>
            </div>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeQuiz}
            >
              Close quiz
            </button>
          </div>
          <Quiz />
        </section>
      )}
    </section>
  );
}

type SideQuestCardProps = {
  sideQuest: SideQuestItem;
  isQuizOpen: boolean;
  quizButtonRef: RefObject<HTMLButtonElement | null>;
  onQuizToggle: () => void;
};

function SideQuestCard({
  sideQuest,
  isQuizOpen,
  quizButtonRef,
  onQuizToggle,
}: SideQuestCardProps) {
  const { action, chips, description, label, title, tone, updates } = sideQuest;

  return (
    <article className={[styles.card, cardToneClasses[tone]].join(" ")}>
      <span className={styles.kicker}>{label}</span>
      <h3 className={styles.cardHeading}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action?.kind === "link" && (
        <a className={styles.cardAction} href={action.href}>
          {action.label}
        </a>
      )}
      {action?.kind === "quiz" && (
        <button
          ref={quizButtonRef}
          type="button"
          className={styles.cardAction}
          aria-controls="side-quest-quiz"
          aria-expanded={isQuizOpen}
          onClick={onQuizToggle}
        >
          {isQuizOpen ? action.expandedLabel : action.label}
        </button>
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

const cardToneClasses = {
  archive: styles.archiveCard,
  quiz: styles.quizCard,
  music: styles.musicCard,
  lately: styles.latelyCard,
} satisfies Record<SideQuestTone, string | undefined>;

export default SideQuests;
