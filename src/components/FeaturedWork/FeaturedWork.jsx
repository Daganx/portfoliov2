import featuredWorks from "../../data/featuredWorkData";
import Slideshow from "../SlideShow/SlideShow";
import "./featuredWork.css";

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="featured-work">
      <h2>Featured Work</h2>
      <div className="featured-work-grid">
        {featuredWorks.map((project, index) => (
          <Slideshow
            key={index}
            project={project}
            isFullWidth={index === 0 || index === 3}
          />
        ))}
      </div>
    </section>
  );
}
