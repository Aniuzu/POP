import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroVideo from '../assets/hero-video.mp4';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content-col">
            <div>
              <h1 className="hero-title">
                BLOCKS & BUILDING MATERIALS SUPPLIER
              </h1>
              <p className="hero-subtitle">
                Supplying quality concrete blocks and raw materials for all your construction
              </p>
              <Button
                as={Link}
                to="/quote"
                variant="primary"
                size="lg"
                className="hero-cta-btn"
              >
                Request a Quote
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-video-col">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;