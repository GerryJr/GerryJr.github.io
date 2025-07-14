import Profile from "../../components/Profile/Profile";
import { skillCategories, qualifications } from "../../data/techSkillsData";
import "./TechSkills.css";

export default function TechSkills() {
  return (
    <section>
      <div id="content-border">
        <div id="content-holder">
          <div className="left-cont">
            <Profile />
          </div>

          <div className="right-cont">
            <h1 className="title">Technical Skills</h1>

            {skillCategories.map((cat) => (
              <div className="experience" key={cat.title}>
                <div className="exp-title">
                  <h2>{cat.title}</h2>
                </div>

                <div className="prog-langs">
                  {cat.skills.map((skill) =>
                    skill.iconClass ? (
                      <div key={skill.name} className="skill-item">
                        <i className={skill.iconClass} title={skill.name} />
                        <p className="skill-name">{skill.name}</p>
                      </div>
                    ) : (
                      <span key={skill.name} className="text-skill">
                        {skill.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}

            <hr className="small-light-grey-line" />

            <h1 id="pub-label" className="title">
              Qualifications
            </h1>

            {qualifications.map((qual) => (
              <div className="experience" key={qual.title}>
                <div className="edu-title">
                  <h3>{qual.title}</h3>
                  <p className="time-stan">{qual.expiry}</p>
                </div>
                <div className="edu-listing">
                  {qual.details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
