// src/pages/Experience/Experience.tsx
import Profile from "../../components/Profile/Profile";
import { educationData } from "../../data/educationData";
import { experienceData } from "../../data/experienceData";
import { publicationsData } from "../../data/publicationsData";
import "./Experience.css"; // your existing CSS

export default function Experience() {
  return (
    <section>
      <div id="content-border">
        <div id="content-holder">
          <div className="left-cont">
            <Profile />
          </div>

          <div className="right-cont">
            {/* ——— EDUCATION ——— */}
            <h1 className="title">Education</h1>
            {educationData.map(({ degree, time, institution, details }) => (
              <div className="experience" key={degree + time}>
                <div className="edu-title">
                  <h3>{degree}</h3>
                  <p className="time-stan">{time}</p>
                </div>
                <div className="edu-listing">
                  <p>{institution}</p>
                  {details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              </div>
            ))}

            <hr className="small-light-grey-line" />

            {/* ——— EXPERIENCE ——— */}
            <h1 id="exp-label" className="title">
              Experience
            </h1>
            {experienceData.map(({ title, time, location, points }) => (
              <div className="experience" key={title + time}>
                <div className="exp-title">
                  <h2>{title}</h2>
                  <p className="time-stan">{time}</p>
                </div>
                <p className="experience-location">{location}</p>
                <div className="exp-listing">
                  {points.map((pt, i) => (
                    <p key={i}>{pt}</p>
                  ))}
                </div>
              </div>
            ))}

            <hr className="small-light-grey-line" />

            {/* ——— PUBLICATIONS ——— */}
            <h1 id="pub-label" className="title">
              Publications
            </h1>
            {publicationsData.map(({ citation, link }) => (
              <div className="experience" key={link}>
                <div className="pub-listing">
                  <p>
                    {citation}{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
