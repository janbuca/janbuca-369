import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Hello there <span className="purple">Firew  </span> here.
            Born and raised in <span className="purple"> Oromiya rigeon in Ethiopia.</span>
            <br />I'm a Computer Science 3 year student at Unity University in Ethiopia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Creator
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Content for funy Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Firest rule of programming If it works then Don't Touth it"{" "}
          </p>
          <footer className="blockquote-footer">እራስህ ለራስህ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
