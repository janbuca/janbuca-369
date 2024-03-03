import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/10001.png";
import Library from "../../Assets/Projects/Library Mgmt System C++.jpg";
import editor from "../../Assets/Projects/amazon.jpg";
import chatify from "../../Assets/Projects/coming soon.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import hotel from "../../Assets/Projects/img (1).jpg";
import bitsOfCode from "../../Assets/Projects/Evangadi-forum.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Class & Clones Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Class projects I've worked on recently ...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Abe Garage"
              description="Building a full stack application. We started from the very basics of HTML, CSS, and JavaScript, and we have now contain with a database, server, and client and hosting in Aws"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Blue moon hotel"
              description="Blue moon hotel it a front-end web it chang the manual system in to modern. it contain Hotel Lobby and Reception Area, Hotel Reservation System, Hotel Guest-facing Staff. Built with only HTML5, css3 and javascript hosting in github."
              ghLink="https://github.com/janbuca/Blue-moon-hotel"
              demoLink="https://janbuca.github.io/Blue-moon-hotel/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Evangadi Discussion Platform"
              description="Evangadi-Forum is a full stack app that allows students to ask questions, comments to the question, like the question and comments,real time notification,change profile picture and password.Built with ReactJS, NodeJs, Express and mysql"
              ghLink="https://github.com/janbuca/Evangadi-Forum-Project.git"
              demoLink="https://shife-evangadi-forum.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Amazon-Clone"
              description="Amazon clone is a clone of the amazon.com website. Built with ReactJS Tailwind css,Nodejs, Express, firebase authentication, firebase cloud functions and stripe payment gateway"
              ghLink="https://github.com/janbuca/Amazon-website-clone.git"
              demoLink="https://clone-ee7ea.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Netflix-Clone"
              description="Netflix clone is a clone of the netflix.com website. Built with ReactJS, Tailwind css and Github authentication."
              ghLink="https://github.com/janbuca/Netflix-Clone/tree/main/netflix-clone"
              demoLink="https://janbuca.github.io/Netflix-Clone/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library Mgmt System C++"
              description="Library Management System is based on a concept of recording owned books, issued books, returned books,
               students who have borrowed and many more.
              "
              ghLink="https://github.com/janbuca/Library-Mgmt-System-C-"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
