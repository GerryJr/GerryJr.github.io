// src/components/Projects/Projects.tsx
import React from "react";
import Profile from "../../components/Profile/Profile";
import { projects } from "../../data/projectsData";

export default function Projects() {
  return (
    <section>
      <div id="content-border">
        <div id="content-holder">
          <div className="left-cont">
            <Profile />
          </div>
          <div className="right-cont">
            <h1 className="title">Projects</h1>
            <hr className="small-light-grey-line" />

            {projects.map((proj, idx) => (
              <React.Fragment key={proj.title}>
                <div className="project-object">
                  <img src={proj.imageSrc} alt={proj.alt} />
                  {proj.link ? (
                    <a href={proj.link} className="linked-title">
                      {proj.title}
                    </a>
                  ) : (
                    <h2>{proj.title}</h2>
                  )}
                  {proj.descriptions.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                {/* don't render a trailing line after the last one */}
                {idx < projects.length - 1 && (
                  <hr className="small-light-grey-line" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
