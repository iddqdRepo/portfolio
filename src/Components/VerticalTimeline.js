import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "../styles.css";
import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="experience">Professional Experience and Education</div>
      <div className="vertical-section-background">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - present"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            // icon={<span class="iconify" data-icon="ion:school-outline" />}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">
              MongoDB, Express, React, NodeJS
            </span>
            <h3 className="vertical-timeline-element-title">
              Full MERN Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Ireland
            </h4>
            <p>
              Javascript developer foocusing on full stack websites built from
              scratch:
              <br /> - BrightEyes Animal Sanctuary
              <br /> - 1v1 Sudoku
              <br /> - Internal Monitoring Tools
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2020"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            // icon={<span class="iconify" data-icon="ion:school-outline" />}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">Python 3</span>
            <h3 className="vertical-timeline-element-title">
              Freelance Python Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Ireland
            </h4>
            <p>
              Python developer working on internal projects, unfortunately NDA's
              were signed so my details are sparse. Projects included:
              <br /> - Client file system scrapers
              <br /> - Data Quality analysis
              <br /> - Internal Monitoring Tools
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2029"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <h3 className="vertical-timeline-element-title">
              Managing Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Ireland
            </h4>
            <p>
              Created an importing and eCommerce company who's brands had a
              yearly turnover of over £500,000. It didn't satisfy my passion for
              programming, so I sold the brands and became a freelance
              developer.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">
              Regex, VBA, SQL
            </span>
            <h3 className="vertical-timeline-element-title">
              Data Quality Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Allstate, Northern Ireland
            </h4>
            <p>
              <br /> - Achieved Informatica IDQ Level 1 and Informatica Advanced
              Techniques
              <br /> - Trained new team members on Informatica Data Quality
              client
              <br /> - Created Job aids for Informatica Data Quality client
              <br /> - Regular expressions proficiency
              <br /> - SQL queries for data validation
              <br /> - Peer review of code and documentation
              <br /> - Troubleshoot errors in code
              <br /> - Code migration process from Dev to Test environments
              <br /> - Identify BDE requirements from source data
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2015"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">
              ServiceNow, VBA, HPSM
            </span>
            <h3 className="vertical-timeline-element-title">Change Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Allstate, Northern Ireland
            </h4>
            <p>
              <br /> - Facilitated meetings and produced agenda for CAB (Change
              Advisory Board)
              <br /> - Maintained SQL and VBA for Change and Release Management
              Microsoft Access Utility
              <br /> - Created user guides and documentation for change and
              release management process during the migration from HPSM to
              ServiceNow
              <br /> - Trained users being onboard to Change and Release records
              on ServiceNow
              <br /> - Facilitated change management changes during change
              freezes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2012"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">
              High 2:1 grade
            </span>
            <h3 className="vertical-timeline-element-title">
              Bachelors Degree in Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Ulster, Northern Ireland
            </h4>
            {/* <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008 - 2010"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <h3 className="vertical-timeline-element-title">
              Foundation Degree in Science and Computing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southwest College, Northern Ireland
            </h4>
            {/* <p>Creative Direction, User Experience, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2006 - 2008"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <h3 className="vertical-timeline-element-title">
              BTEC National Diploma in Information Communication Technologies
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southwest College, Northern Ireland
            </h4>
            {/* <p>Creative Direction, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#00a287", color: "#fff" }}
            // icon={<span class="iconify" data-icon="emojione-monotone:baby" />}
          />
        </VerticalTimeline>
        ;
      </div>
    </>
  );
};

export default Timeline;
