import { engineeringHighlights } from "../data/portfolio";

function EngineeringHighlights() {
  return (
    <section id="engineering-highlights" className="portfolio-section">
      <h2>Engineering highlights</h2>
      {engineeringHighlights.map((highlight) => (
        <article className="engineering-highlight" key={highlight.title}>
          <h3>{highlight.title}</h3>
          <p>{highlight.summary}</p>
          <ul>
            {highlight.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default EngineeringHighlights;
