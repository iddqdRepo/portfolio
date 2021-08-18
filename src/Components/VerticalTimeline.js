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
      <div className="vertical-section-background">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
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
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
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
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
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
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //   icon={<SchoolIcon />}
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
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            //   icon={<StarIcon />}
          />
        </VerticalTimeline>
        ;
      </div>
    </>
  );
};

export default Timeline;
