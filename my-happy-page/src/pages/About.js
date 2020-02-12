import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "../assets/images/best-cr-beach.jpg";



function About() {
  return (
    <div>
      {/* https://i.imgur.com/qkdpN.jpg */}
      <Hero backgroundImage={backgroundImage}>
        <h1>My Happy Page</h1>
        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>When things are tough, look at a pup or some nature!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Life can be hard, life can be rough. 
            </p>
            <p>
              Think of things that will help pull you through.
            </p>
            <p>
              Life can be too beautiful to sit let it control your mood.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
