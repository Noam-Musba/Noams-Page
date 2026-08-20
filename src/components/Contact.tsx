function Contact() {
  const legacyUrl = `${import.meta.env.BASE_URL}legacy/`;

  return (
    <footer id="contact" className="site-footer">
      <h2>Contact</h2>
      <address>
        <p>Herzliya, Israel</p>
        <ul>
          <li>
            <a href="mailto:noammusbajobs@gmail.com">Email Noam</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/noam-musba">
              Noam on LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Noam-Musba">Noam on GitHub</a>
          </li>
        </ul>
      </address>
      <p>
        <a href={legacyUrl}>See the original 2023 version</a>
      </p>
    </footer>
  );
}

export default Contact;
