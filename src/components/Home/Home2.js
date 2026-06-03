import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body"> 
              I build dependable, scalable software that turns concepts into
              production-ready solutions. Over the years I’ve worked with many
              technologies and discovered my passion for creating high-performance
              systems and seamless user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, HTML, CSS, React, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Machine Learning Projects,{" "}
                </b>
              </i>
              and exploring new ways to build innovative solutions to real-world problems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> real-world </b> and modern technologies like{" "}
              <i>
                <b className="purple">Artificial Intelligence</b> and{" "}
                <b className="purple">Generative AI</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
