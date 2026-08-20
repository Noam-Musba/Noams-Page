import Background from "./Background";
import EngineeringHighlights from "./EngineeringHighlights";
import Experience from "./Experience";
import Personal from "./Personal";
import Skills from "./Skills";
import Quiz from "./Quiz";

function Main() {
  return (
    <main id="main-content" className="site-main" tabIndex={-1}>
      <Experience />
      <Skills />
      <EngineeringHighlights />
      <Background />
      <Personal />
      <Quiz />
    </main>
  );
}

export default Main;
