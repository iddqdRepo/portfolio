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
            date="2018 - present"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            // icon={<span class="iconify" data-icon="ion:school-outline" />}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Ireland
            </h4>
            <p>React, Express, NodeJS, Python</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <span class="main-badge mr-2 mb-2 badge badge-pill">
              Angular 8/9/10
            </span>
            <h3 className="vertical-timeline-element-title">
              Managing Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Ireland
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Quality Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Allstate, Northern Ireland
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "#006f7b", color: "#fff" }}
            icon={<span class="iconify" data-icon="bi:code" />}
          >
            <h3 className="vertical-timeline-element-title">Change Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Allstate, Northern Ireland
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors Degree in Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Ulster, Northern Ireland
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <h3 className="vertical-timeline-element-title">
              Foundation Degree in Science and Computing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southwest College, Northern Ireland
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "#00a287", color: "#fff" }}
            icon={<span class="iconify" data-icon="ion:school-outline"></span>}
          >
            <h3 className="vertical-timeline-element-title">
              BTEC National Diploma in Information Communication Technologies
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southwest College, Northern Ireland
            </h4>
            <p>Creative Direction, Visual Design</p>
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
