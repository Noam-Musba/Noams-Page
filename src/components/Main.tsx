import Background from "./Background";
import EngineeringHighlights from "./EngineeringHighlights";
import Experience from "./Experience";
import Hero from "./Hero";
import Skills from "./Skills";
import SideQuests from "./SideQuests";
import layoutStyles from "../styles/Layout.module.css";

function Main() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <div className={layoutStyles.container}>
        <Experience />
        <Skills />
        <EngineeringHighlights />
        <Background />
        <SideQuests />
      </div>
    </main>
  );
}

export default Main;
