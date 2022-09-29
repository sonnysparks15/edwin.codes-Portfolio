import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Edwin Sparks </span>
            from <span className="purple"> Stephenville, Texas.</span>
            <br />
            Software Engineer who enjoys figuring out puzzles and efficiency problems.
            <br />
            Motivated designer and developer with experience
            with ReactJs, JavaScript, C/C++, C#, R Studio, Python, Matlab, Mathematica, Autodesk Suite,
            and SQL Integration.
            <br />
            Apart from coding, some other activities that I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Mathematics
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking to hidden water holes
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
