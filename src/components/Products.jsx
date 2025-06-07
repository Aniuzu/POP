import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import concreteBlocks from '../assets/SolidBlock.webp';
import sand from '../assets/Sand.webp';
import cement from '../assets/Cement.webp';
import gravel from '../assets/Gravel.webp';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Concrete Blocks",
      image: concreteBlocks,
      description: "High-quality concrete blocks in various sizes and strengths for all construction needs.",
      features: ["Standard & hollow blocks", "Load-bearing options", "Custom sizes available"]
    },
    {
      id: 2,
      title: "Sand",
      image: sand,
      description: "Premium construction sand for concrete mixing and plastering applications.",
      features: ["Sharp sand", "Soft sand", "Screened & washed"]
    },
    {
      id: 3,
      title: "Cement",
      image: cement,
      description: "Top-grade cement from trusted manufacturers for durable construction.",
      features: ["42.5R grade", "32.5N grade", "Water-resistant options"]
    },
    {
      id: 4,
      title: "Gravel",
      image: gravel,
      description: "Quality aggregates for concrete mixing and drainage applications.",
      features: ["10mm-20mm sizes", "Granite & limestone", "Clean & durable"]
    }
  ];

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Quality building materials for all your construction projects</p>
        </div>

        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 product-card shadow-sm">
                <div className="product-image-container">
                  <Card.Img variant="top" src={product.image} />
                </div>
                <Card.Body>
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="product-description">{product.description}</Card.Text>
                  <ul className="product-features">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button
                    as={Link}
                    to="/quote"
                    variant="primary"
                    size="lg"
                    className="hero-cta"
                  >
                    Request a Quote
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;