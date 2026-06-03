import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Feedback System"
              description="A student feedback system collects and shares learner input on courses and instructors so educators can improve teaching and students can track progress."
              ghLink="https://github.com/Navya2906/Student-Feedback-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Complaint registration system"
              description="An online complaint registration system lets users submit issues and track resolutions digitally, helping organizations respond faster and keep records organized."
              ghLink="https://github.com/Navya2906/FSD-Project"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Insight Studio"
              description="Civil Engineering Insight Studio delivers data-driven analysis and visualization for civil infrastructure design, project planning, and construction performance."
              ghLink="https://github.com/Navya2906/Civil-Engineering-Insight-Studio"
              demoLink="https://github.com/Navya2906/Civil-Engineering-Insight-Studio/blob/main/Project%20Demo.mp4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
