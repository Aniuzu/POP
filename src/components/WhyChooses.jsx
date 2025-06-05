import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAward, FaTruck, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="feature-icon" />,
      title: "Quality Certified",
      description: "All our materials meet industry standards with proper certifications"
    },
    {
      icon: <FaTruck className="feature-icon" />,
      title: "Reliable Delivery",
      description: "On-time delivery to your construction site across the region"
    },
    {
      icon: <FaCheckCircle className="feature-icon" />,
      title: "Proven Track Record",
      description: "15+ years serving construction companies and individual builders"
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "Expert Support",
      description: "Knowledgeable staff to help you choose the right materials"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Why Choose Our Building Materials?</h2>
            <p className="section-subtitle">
              We go beyond supplying materials - we partner in your construction success
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="feature-card">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Trust Indicators */}
        <Row className="trust-indicators mt-5 pt-4">
          <Col md={4} className="text-center">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </Col>
          <Col md={4} className="text-center">
            <div className="stat-number">500+</div>
            <div className="stat-label">Satisfied Clients</div>
          </Col>
          <Col md={4} className="text-center">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;