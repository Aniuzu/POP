import React from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Pter Tinu",
    company: "Obi Constructions",
    rating: 5,
    text: "Exceptional service and top-notch materials. Highly recommended for quality construction supplies."
  },
  // Add more testimonials...
];

const Testimonials = () => {
  return (
    <section id="testimonials-contact" className="testimonials-contact-section py-5">
      <Container>
        {/* Testimonials Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">What Our Customers Are Saying</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Carousel indicators={false} interval={5000}>
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="testimonial-card text-center p-4">
                    <FaQuoteLeft className="quote-icon mb-3" />
                    <p className="testimonial-text mb-4">"{testimonial.text}"</p>
                    <div className="rating mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? "star-filled" : "star-empty"} />
                      ))}
                    </div>
                    <h4 className="customer-name mb-1">{testimonial.name}</h4>
                    <p className="customer-company text-muted">{testimonial.company}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Contact Us</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6}>
            <div className="contact-info-card p-4 h-100">
              <h3 className="mb-4">Get In Touch</h3>
              
              <div className="contact-item d-flex mb-4">
                <div className="contact-icon-container me-3">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">1709 Emuma St, City, State 17245</p>
                </div>
              </div>
              
              <div className="contact-item d-flex mb-4">
                <div className="contact-icon-container me-3">
                  <FaPhone className="contact-icon" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p className="mb-0">+234 800 000 0000</p>
                </div>
              </div>
              
              <div className="contact-item d-flex mb-4">
                <div className="contact-icon-container me-3">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p className="mb-0">ogwuawuri@example.com</p>
                </div>
              </div>
              
              <div className="contact-item d-flex">
                <div className="contact-icon-container me-3">
                  <FaClock className="contact-icon" />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p className="mb-0">Mon-Fri: 8AM - 5PM<br />Sat: 9AM - 2PM</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Form className="contact-form p-4">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Your phone number" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="w-100 py-2">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;