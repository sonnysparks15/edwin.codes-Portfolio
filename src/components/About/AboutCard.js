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
            <div style={{ textIndent: "2em" }} >My childhood had an extreme impact on my life, it shaped me into the gentleman I am today, and
            I'm grateful for it. My childhood was comprised mostly of legos and snowcones. I was extremely
            fascinated with the way things worked and why they worked. This manifested into the start of my
            higher education in Chemical Engineering in the heart of southeast Texas, Beaumont. I quickly realized
            that I didn't want to be in southeast Texas working in the plants my entire life, so I transferred after a
            year and a half. I moved 6 hours away to my current residency in Stephenville Texas. This was the best move
              of my life and I'm glad I made the jump of faith to do it.</div>
            <div style={{ textIndent: "2em" }} >Upon arriving here, I had to switch majors since
            Tarleton State University doesn't offer Chemical Engineering. So I switched to Mechanical engineering. After
            my first semester in mechanical engineering, I recognized that I look forwarded to the higher-level math classes
            more than I did the engineering classes. I had always planned on going for a master in physics or engineering and
            then a doctorate in mathematics after i got my engineering bachelors degree, so I made the executive decision to
            switch ajors one more time and become a mathematics major to make me more marketable and prepare for which ever STEM
              masters that I would be pursuing next. I tacked on a minor in Computer science and ive never been happier.</div>
            I'm dedicated and hard working for my goals, I enjoy a challenge and welcome them. I look forward to where I will end up next.
            <div style={{ textIndent: "2em" }} >Some other hobbies I enjoy outside of coding are:</div>
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
