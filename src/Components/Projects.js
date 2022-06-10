import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects-title">Projects</div>
      <ul className="projects-flex-container wrap">
        <li className="projects-flex-item-container">
          <div className="project-demo-image"></div>
          <div className="project-demo-title">Bright Eyes Animal Sanctuary</div>
          <div className="project-demo-description">
            Bright Eyes Animal Sanctuary is an animal rescue center. They wanted
            to move away from their paper based system. I helped them design a
            website that fit their general brand colour theme and organise their
            information all in one site. I created the full stack front and back
            end with an Admin Panel for them to receive adoption applications
            (with email notifications), list rescued animals for adoption etc.
          </div>
          <div className="project-demo-buttons-container">
            <button className="github-button"></button>
            <button className="view-site-button"></button>
          </div>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="bx:bxl-python"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="fa-brands:node"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="akar-icons:react-fill"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="lucide:regex"
            data-width="70"
            data-height="70"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="simple-icons:express"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
            style={{ color: "white" }}
            data-icon="akar-icons:github-fill"
            data-width="80"
            data-height="80"
          ></span>
        </li>
        <li className="projects-flex-item-container">
          <span
            className="iconify icon-projects"
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

export default Projects;
