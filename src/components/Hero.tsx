import profilePhoto from "../assets/profile-pic.jpg";
import layoutStyles from "../styles/Layout.module.css";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={layoutStyles.container}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Software Engineer</p>
            <h1 className={styles.name}>Noam Musba</h1>
            <p className={styles.specialty}>
              Frontend-focused · React · TypeScript
            </p>
            <p className={styles.introduction}>
              Software engineer with three years of experience building product
              features and owning developer tooling, quality, observability, and
              deployment automation.
            </p>
          </div>
          <img
            className={styles.profileImage}
            src={profilePhoto}
            alt="Noam Musba smiling"
            width={720}
            height={900}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
