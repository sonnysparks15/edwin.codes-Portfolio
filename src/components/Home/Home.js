import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Profile Pic copy.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Edwin Sparks</strong>
              </h1>

              <p className="heading-description blockquote">
                I am a passionate mathematician and computer scientist. “Any fool can write code that a computer can understand.
                Good programmers write code that humans can understand.”
                – Martin Fowler, software engineer, object-oriented programming pioneer.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={6}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section mt-5" id="about">
      <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Contact</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
