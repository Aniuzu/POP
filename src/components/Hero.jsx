import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../assets/hero-materials.webp';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <div className="text-container">
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
                className="hero-cta"
              >
                Request a Quote
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Description"
                loading="lazy"  // This enables native lazy loading
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;