import Background from "./Background";
import EngineeringHighlights from "./EngineeringHighlights";
import Experience from "./Experience";
import Personal from "./Personal";
import Skills from "./Skills";
import Quiz from "./Quiz";

function Main() {
  return (
    <main className="site-main">
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
