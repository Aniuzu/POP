import { useState, useEffect } from 'react';
import { Button, Form, Alert, Spinner, Modal, Row, Col } from 'react-bootstrap';

const QuoteForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: 1,
    projectDetails: ''
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successData, setSuccessData] = useState(null);
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    phone: false
  });

  // Enhanced email validation
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Enhanced phone validation for Nigerian numbers
  const isValidPhone = (phone) => {
    const re = /^(0|\+?234)(7|8|9)(0|1)\d{8}$/;
    return re.test(String(phone).trim());
  };

  // Fetch products with error handling
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to load products. Please refresh the page.');
      } finally {
        setProductsLoading(false);
      }
    };

    fetchProducts();
  }, [API_BASE_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? Math.max(1, parseInt(value) || 1) : value
    }));

    // Mark field as touched for validation
    if (name in touchedFields) {
      setTouchedFields(prev => ({ ...prev, [name]: true }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Client-side validation
      const requiredFields = {
        name: 'Full name is required',
        email: 'Email is required',
        phone: 'Phone number is required',
        product: 'Product selection is required',
        projectDetails: 'Project details are required'
      };

      // Check required fields
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!formData[field].trim()) {
          throw new Error(message);
        }
      }

      // Validate formats
      if (!isValidEmail(formData.email)) {
        throw new Error('Please enter a valid email address (e.g., yourname@example.com)');
      }

      if (!isValidPhone(formData.phone)) {
        throw new Error('Please enter a valid Nigerian phone number (e.g., 08012345678 or +2348012345678)');
      }

      // Prepare payload
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        projectDetails: formData.projectDetails.trim(),
        products: [{
          productId: formData.product,
          quantity: formData.quantity
        }]
      };

      // Submit with timeout
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(`${API_BASE_URL}/api/v1/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed. Please try again.');
      }

      const responseData = await response.json();
      
      setSuccessData({
        id: responseData.data._id,
        email: formData.email
      });

      // Reset form if submission was successful
      if (responseData.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          quantity: 1,
          projectDetails: ''
        });
        setTouchedFields({
          email: false,
          phone: false
        });
      }

    } catch (error) {
      console.error('Submission error:', error);
      setError(
        error.name === 'AbortError' 
          ? 'Request timed out. Please try again.' 
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Field validation states
  const emailIsInvalid = touchedFields.email && !isValidEmail(formData.email);
  const phoneIsInvalid = touchedFields.phone && !isValidPhone(formData.phone);

  return (
    <div id="quote" className="container my-5 py-4 bg-light rounded shadow-sm">
      <h2 className="text-center mb-4 fw-bold">Request a Quote</h2>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible className="mb-4">
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Row className="mb-3">
          <Col md={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                isInvalid={touchedFields.name && !formData.name.trim()}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your full name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="e.g. 08012345678 or +2348012345678"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={phoneIsInvalid}
                required
                onBlur={() => setTouchedFields(prev => ({ ...prev, phone: true }))}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Nigerian phone number
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="yourname@example.com"
            value={formData.email}
            onChange={handleChange}
            isInvalid={emailIsInvalid}
            required
            onBlur={() => setTouchedFields(prev => ({ ...prev, email: true }))}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Col md={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formProduct">
              <Form.Label>Product *</Form.Label>
              <Form.Select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                disabled={productsLoading}
                isInvalid={touchedFields.product && !formData.product}
              >
                <option value="">-- Select Product --</option>
                {productsLoading ? (
                  <option>Loading products...</option>
                ) : (
                  products.map(product => (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  ))
                )}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a product
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity *</Form.Label>
              <Form.Control
                type="number"
                min="1"
                name="quantity"
                placeholder="e.g. 100"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="formProjectDetails">
          <Form.Label>Project Details *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="projectDetails"
            placeholder="Describe your project and delivery requirements"
            value={formData.projectDetails}
            onChange={handleChange}
            required
            isInvalid={touchedFields.projectDetails && !formData.projectDetails.trim()}
          />
          <Form.Control.Feedback type="invalid">
            Please provide project details
          </Form.Control.Feedback>
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            size="lg"
            disabled={loading}
            className="px-5 py-2 fw-bold"
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Submitting...
              </>
            ) : 'Submit Request'}
          </Button>
        </div>
      </Form>

      <Modal show={!!successData} onHide={() => setSuccessData(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Request Received!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your quote request <strong>#{successData?.id}</strong> has been received successfully!</p>
          <p>We'll review your request and contact you at <strong>{successData?.email}</strong>.</p>
          <Alert variant="info" className="mt-3">
            <p className="mb-0">You can reply to any future emails from us regarding this quote.</p>
            <p className="mb-0">Please keep this reference number for your records.</p>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setSuccessData(null)}>
            Close
          </Button>
          <Button 
            variant="outline-primary" 
            onClick={() => navigator.clipboard.writeText(successData?.id)}
          >
            Copy Reference
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuoteForm;