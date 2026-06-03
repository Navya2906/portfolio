import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiFillPhone, AiFillEnvironment } from "react-icons/ai";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} className="contact-description">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get in <strong className="purple">Touch</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Reach out and let's start
              a conversation.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          <Col md={4} className="contact-card">
            <h4>
              <a href="mailto:navya3424@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                <AiOutlineMail /> Email
              </a>
            </h4>
            <p>
              <a href="mailto:navya3424@gmail.com" style={{ color: "white", textDecoration: "underline" }}>
                navya3424@gmail.com
              </a>
            </p>
          </Col>
          <Col md={4} className="contact-card">
            <h4>
              <a href="tel:+917569322772" style={{ color: "inherit", textDecoration: "none" }}>
                <AiFillPhone /> Call
              </a>
            </h4>
            <p>
              <a href="tel:+917569322772" style={{ color: "white", textDecoration: "underline" }}>
                +91-7569322772
              </a>
            </p>
          </Col>
          <Col md={4} className="contact-card">
            <h4>
              <AiFillEnvironment /> Location
            </h4>
            <p>Rajahmundry, Andhra Pradesh, India</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
