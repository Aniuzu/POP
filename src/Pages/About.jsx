import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

import SiteImg from '../assets/site.png';
import TruckImg from '../assets/truck.png';

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="image-wrapper">
              <img src={SiteImg} alt="Construction Site" className="about-img site-img" />
              <img src={TruckImg} alt="Truck" className="about-img truck-img" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-content">
              <h2 className="section-title mb-4">About Us</h2>
              <p className="lead mb-4">
                We are a leading manufacturer of high-quality concrete blocks and supplier of other building materials.
              </p>
              <p className="about-text">
                Serving construction companies and individual builders since 2010, we take pride in delivering
                superior products that meet industry standards. Our team of experts ensures every material
                meets our rigorous quality control process.
              </p>
              <div className="about-features mt-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill feature-icon"></i>
                  <span>15+ years industry experience</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill feature-icon"></i>
                  <span>Quality certified materials</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill feature-icon"></i>
                  <span>Reliable nationwide delivery</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Mission/Vision Section */}
        <Row className="mt-5 pt-4">
          <Col md={6} className="mb-4">
            <div className="mission-card p-4 h-100">
              <h3 className="h4 mb-3">Our Mission</h3>
              <p>
                To provide durable, high-quality building materials that help construct lasting
                structures while maintaining sustainable practices in our manufacturing process.
              </p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="vision-card p-4 h-100">
              <h3 className="h4 mb-3">Our Vision</h3>
              <p>
                To become Nigeria's most trusted building materials supplier through innovation,
                quality products, and exceptional customer service.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
