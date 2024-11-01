import Contact from "./components/Contact/Contact";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import IntroductionBanner from "./components/IntroductionBanner/IntroductionBanner";
import Navigation from "./components/Navigation/Navigation";
import Timeline from "./components/Timeline/Timeline";
import SkillsItems from "./components/SkillsItems/SkillsItems";

function App() {
  return (
    <>
      <Navigation />
      <HeroBanner />
      <IntroductionBanner />
      <SkillsItems />
      <FeaturedWork />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
