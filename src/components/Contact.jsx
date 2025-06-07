import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Form submitted! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Contact Us</h2>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="contact-info p-4 shadow-sm rounded bg-white">
              <h4 className="mb-4">Get in Touch</h4>
              
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt className="me-3 mt-1" size={20} />
                <div>
                  <h5>Address</h5>
                  <p className="mb-0">1734 Example St, City, State, 17245</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <FaPhone className="me-3 mt-1" size={20} />
                <div>
                  <h5>Phone</h5>
                  <p className="mb-0">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <FaEnvelope className="me-3 mt-1" size={20} />
                <div>
                  <h5>Email</h5>
                  <p className="mb-0">info@example.com</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-white">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;