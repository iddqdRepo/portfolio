import React from "react";

const Skills = () => {
  return (
    <>
      <div className="skills-title">Skills</div>
      <ul className="skills-flex-container wrap">
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="la:node-js"
            data-width="80"
            data-height="80"
          ></span>{" "}
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="cib:next-js"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="fa-brands:node"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="akar-icons:react-fill"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="lucide:regex"
            data-width="70"
            data-height="70"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="simple-icons:express"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="akar-icons:github-fill"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="skills-flex-item">
          <span
            className="iconify icon-skills"
            style={{ color: "white" }}
            data-icon="simple-icons:mongodb"
            data-width="80"
            data-height="80"
          ></span>
        </li>
      </ul>
    </>
  );
};

export default Skills;
