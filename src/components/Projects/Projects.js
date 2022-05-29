import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Fitmeal from "../../Assets/Projects/Fitmeal.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import uboric from "../../Assets/Projects/uboric.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import pepperfry from "../../Assets/Projects/pepperfry.png"

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
              imgPath={pepperfry}
              isBlog={false}
              title="Pepperfry"
              description="let’s know about Pepperfry. It is an Indian online marketplace for furniture and home décor. The company was formed by Ex-eBay executives Ambareesh Murty and Ashish Shah. They started Pepperfry in Mumbai in 2012. The company is headquartered in Mumbai, Maharashtra, and operates as a subsidiary of Trendsutra Platform Services Private Limited. TechStack - JavaScript | HTML | CSS"
              link="https://github.com/akhilgonde/Pepper-Fry-Clone/tree/main"
              deploy="https://rainbow-crostata-a77d7d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fitmeal}
              isBlog={false}
              title="FitMeals"
              description="In 2015, Aman, Zeeshan, Bhavyanth and Apoorva Co-Founded Fitmeals India, the first delivery service of its kind in India.The intention was to introduce the concept of healthy eating in Hyderabad where people always associated healthy food with terms like ‘expensive’, ‘boring’ and ’bland’. TechStack - JavaScript | HTML | CSS | Mongodb | Express"
              link="https://github.com/Arfeen98/FitMealsCLone"
              deploy="https://flourishing-brigadeiros-066ec5.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
