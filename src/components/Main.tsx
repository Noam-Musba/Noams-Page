import Background from "./Background";
import EngineeringHighlights from "./EngineeringHighlights";
import Experience from "./Experience";
import Skills from "./Skills";
import SideQuests from "./SideQuests";
import layoutStyles from "../styles/Layout.module.css";

function Main() {
  return (
    <main id="main-content" className={layoutStyles.container} tabIndex={-1}>
      <Experience />
      <Skills />
      <EngineeringHighlights />
      <Background />
      <SideQuests />
    </main>
  );
}

export default Main;
