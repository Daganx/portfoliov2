import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import IntroductionBanner from "./components/IntroductionBanner/IntroductionBanner";
import Navigation from "./components/Navigation/Navigation";
import Timeline from "./components/Timeline/Timeline";
import SkillsItems from "./components/SkillsItems/SkillsItems";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <>
      <Navigation />
      <HeroBanner />
      <IntroductionBanner />
      <SkillsItems />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
