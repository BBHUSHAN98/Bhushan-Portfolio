import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayur Khachane </span>
            from <span className="purple"> Jalgaon, Maharashtra.</span>
            <br />I am a Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.
            <br />Passionate about building digital products that improve everyday experience for people.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Carpentry
            </li>
            <li className="about-activity">
              <ImPointRight /> Electronics
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If you can`t Buy it Make it"{" "}
          </p>
          <footer className="blockquote-footer">Mayur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
