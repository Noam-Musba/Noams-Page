function Contact() {
  const legacyUrl = `${import.meta.env.BASE_URL}legacy/`;

  return (
    <footer className="site-footer">
      <h2>Contact</h2>
      <p>Herzliya, Israel</p>
      <ul>
        <li>
          <a href="mailto:noammusbajobs@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/noam-musba"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Noam-Musba"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href={legacyUrl} target="_blank" rel="noreferrer">
            See the original 2023 version
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
