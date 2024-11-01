import "./skillsItems.css";
import Skills from "/assets/images/skills/skillsItems.png";

export default function SkillsItems() {
  return (
    <>
      <section className="skills">
        <div className="skills-list">
          <img src={Skills} alt="list of Dagan's skills" />
        </div>
      </section>
    </>
  );
}
