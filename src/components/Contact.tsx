import { contactLinks } from "../data/portfolio";
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
              {contactLinks.map(({ href, label }) => (
                <li key={href}>
                  <a className={styles.contactLink} href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
        <section>
          <h2 className={styles.heading}>About this site</h2>
          <p className={styles.projectDescription}>
            Explore the project and its evolution.
          </p>
          <ul className={styles.projectLinks}>
            <li>
              <a
                className={styles.projectLink}
                href="https://github.com/Noam-Musba/Noams-Page"
              >
                View source code
              </a>
            </li>
            <li>
              <a className={styles.projectLink} href={legacyUrl}>
                See the original 2023 version
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Contact;
