import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooses";
import Testimonials from "../components/Testimonials";
import { Container, Row, Col } from 'react-bootstrap'; // Added missing imports

const Home = () => {
  return ( // Added missing return statement
    <main className="construction-home">
      <Hero />
      
      <section className="about-preview py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="mb-4">Trusted Building Materials Supplier</h2>
              <p className="lead mb-4">
                With over 15 years of experience, we provide quality materials for all construction needs.
              </p>
              <Link to="/about" className="btn btn-outline-primary px-4">
                Our Story
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <Products />
      <WhyChooseUs />
      <Testimonials />
    </main>
  ); // Added closing parenthesis for return
};

export default Home;