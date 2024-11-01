import "./heroBanner.css";
import toggle from "/assets/images/hero/toggle.avif";

export default function HeroBanner() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-banner-info">
          <div className="front-end">
            <h2>Fr<img src={toggle} alt="" />nt-End</h2>
          </div>
          <h3>SOFTWARE</h3>
          <h4>DEVELOPER</h4>
          <h5>
            Open to <span>new job offers O</span>
          </h5>
        </div>
      </section>
    </>
  );
}
