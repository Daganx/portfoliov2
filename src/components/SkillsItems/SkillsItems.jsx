import "./skillsItems.css";
import SkillsImage from "../../assets/images/skills/skillsItems.png";
import SkillsImageMobile from "../../assets/images/skills/skillsItemsMobile.png";
import { useEffect, useState } from "react";

export default function SkillsItems() {
  const [imageSrc, setImageSrc] = useState(SkillsImage);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setImageSrc(SkillsImageMobile);
    } else {
      setImageSrc(SkillsImage);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <section className="skills">
        <div className="skills-list">
          <img src={imageSrc} alt="list of Dagan's skills" />
        </div>
      </section>
    </>
  );
}
