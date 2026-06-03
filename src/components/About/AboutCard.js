import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Navya Bade</span>{" "}
            from <span className="purple">Rajamundry, AndhraPradesh, India</span>.
            <br />
            I’m  selected as a{" "}
            <span className="purple">System Engineer role at Infosys</span> at{" "}
            <span className="purple">Associate IT Consultant</span>.
            <br />I have completed my graduation in 2026 in{" "}
            <span className="purple">Computer Science and Engineering at</span> from{" "}
            <span className="purple">Aditya College of Engineering and Technology</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Content from online
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Navya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
