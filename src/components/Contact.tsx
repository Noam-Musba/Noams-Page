import layoutStyles from "../styles/Layout.module.css";
import styles from "./Contact.module.css";

function Contact() {
  const legacyUrl = `${import.meta.env.BASE_URL}legacy/`;

  return (
    <footer id="contact" className={styles.footer}>
      <div className={[layoutStyles.container, styles.content].join(" ")}>
        <div>
          <h2 className={styles.heading}>Contact</h2>
          <address className={styles.address}>
            <p className={styles.location}>Herzliya, Israel</p>
            <ul className={styles.links}>
              <li>
                <a
                  className={styles.contactLink}
                  href="mailto:noammusbajobs@gmail.com"
                >
                  Email Noam
                </a>
              </li>
              <li>
                <a
                  className={styles.contactLink}
                  href="https://www.linkedin.com/in/noam-musba"
                >
                  Noam on LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={styles.contactLink}
                  href="https://github.com/Noam-Musba"
                >
                  Noam on GitHub
                </a>
              </li>
            </ul>
          </address>
        </div>
        <p className={styles.legacy}>
          <a className={styles.legacyLink} href={legacyUrl}>
            See the original 2023 version
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Contact;
