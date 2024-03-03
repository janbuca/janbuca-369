import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I started programming in early 2021, when I joined  Computer 
              Science department at Unity Universty in Ethiopia.
              <br />
              <br />
              I first started with C++ (cpp) and Python then going to web development
              in Evangadi-Network class at june 2023 GC (Sene 17, 2015 Ec).
              <br />
              <br />
              And my favorite coding language has been
              <i>
                <b className="purple"> Javascript </b> and I'm conversant with
                Java
              </i>
              <br />
              <br />
              I'm highly interested in &nbsp;
              <i>
                <b className="purple">Artificial intelligence (AI)</b> and it also{" "}
                <b className="purple"> Machine Learning (ML) </b>
              </i>
              <br />
              <br />
              I'm also a member of the ALX Ethiopian
              <b className="purple"> alx </b> and it also
              <i>
                <b className="purple"> Student</b>
              </i>
              &nbsp; and
              <b className="purple"> Familey member </b> of  Evangadi-Network
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with
              <b className="purple"> Node.js </b>and 
              <i>
                <b className="purple"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <b className="purple"> React.js and Next.js</b>
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/janbuca"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/janbuca369/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/firew-kifle-b665742a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkHRXX5lbTOKv2l02qFw6dg%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/firew_kifle/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
