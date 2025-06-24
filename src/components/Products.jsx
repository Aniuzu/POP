import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';

// Import local fallback images
import concreteBlocksImg from '../assets/SolidBlock.webp';
import sandImg from '../assets/Sand.webp';
import cementImg from '../assets/Cement.webp';
import gravelImg from '../assets/Gravel.webp';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback product data with direct image references
  const fallbackProducts = [
    {
      _id: '1',
      title: "Concrete Blocks",
      description: "High-quality concrete blocks in various sizes and strengths.",
      features: ["Standard & hollow blocks", "Load-bearing options"],
      image: concreteBlocksImg
    },
    {
      _id: '2',
      title: "Sand",
      description: "Premium construction sand for concrete mixing.",
      features: ["Sharp sand", "Soft sand"],
      image: sandImg
    },
    {
      _id: '3',
      title: "Cement",
      description: "Top-grade cement from trusted manufacturers.",
      features: ["42.5R grade", "32.5N grade"],
      image: cementImg
    },
    {
      _id: '4',
      title: "Gravel",
      description: "Quality aggregates for concrete mixing.",
      features: ["10mm-20mm sizes", "Granite & limestone"],
      image: gravelImg
    }
  ];

  // Get corresponding fallback image
  const getFallbackImage = (title) => {
    const imageMap = {
      'Concrete Blocks': concreteBlocksImg,
      'Sand': sandImg,
      'Cement': cementImg,
      'Gravel': gravelImg
    };
    return imageMap[title] || concreteBlocksImg;
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get('http://localhost:5000/api/v1/products', {
        headers: { 'Content-Type': 'application/json' },
        timeout: 3000
      });

      const apiProducts = response.data?.data || response.data;
      
      if (!Array.isArray(apiProducts)) {
        throw new Error('Invalid products data format');
      }

      // Process products with image handling
      const processedProducts = apiProducts.map(product => ({
        ...product,
        // Use local fallback images directly instead of trying to fetch from server
        image: getFallbackImage(product.title)
      }));

      setProducts(processedProducts);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Showing sample products');
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading && products.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading products...</p>
      </Container>
    );
  }

  return (
    <section id="products" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Products</h2>
          {error && (
            <Alert variant="warning" onClose={() => setError(null)} dismissible>
              {error}
            </Alert>
          )}
        </div>

        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product._id}>
              <Card className="h-100 shadow-sm">
                <div className="ratio ratio-4x3">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.title}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  {product.features && (
                    <ul className="ps-3">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
                <Card.Footer>
                  <Button 
                    as={Link}
                    to="/quote"
                    variant="primary"
                    className="w-100"
                  >
                    Get Quote
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