import { useState, useEffect } from 'react';
import { Button, Form, Alert, Spinner, Modal, Row, Col } from 'react-bootstrap';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    projectDetails: ''
  });

  const [products, setProducts] = useState([]); // For product selection dropdown
  const [loading, setLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    phone: false
  });

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/products');
        const data = await response.json();
        if (response.ok) {
          setProducts(data.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setProductsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name in touchedFields) {
      setTouchedFields(prev => ({ ...prev, [name]: true }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      projectDetails: ''
    });
    setTouchedFields({ email: false, phone: false });
  };

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim());
  };

  const isValidPhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return re.test(String(phone).trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Client-side validation
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        product: formData.product.trim(),
        quantity: formData.quantity.trim(),
        projectDetails: formData.projectDetails.trim()
      };

      // Check required fields
      if (!trimmedData.name) throw new Error('Full name is required');
      if (!trimmedData.email) throw new Error('Email is required');
      if (!trimmedData.phone) throw new Error('Phone number is required');
      if (!trimmedData.product) throw new Error('Product selection is required');
      if (!trimmedData.quantity) throw new Error('Quantity is required');
      if (!trimmedData.projectDetails) throw new Error('Project details are required');

      // Validate formats
      if (!isValidEmail(trimmedData.email)) {
        throw new Error('Please enter a valid email (e.g., yourname@example.com)');
      }

      if (!isValidPhone(trimmedData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // Prepare payload matching backend expectations
      const payload = {
        name: trimmedData.name,
        email: trimmedData.email,
        phone: trimmedData.phone,
        projectDetails: trimmedData.projectDetails,
        products: [{
          product: trimmedData.product, // This should be a product ID
          quantity: parseInt(trimmedData.quantity) || 1
        }]
      };

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('http://localhost:5000/api/v1/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeout);

      const responseData = await response.json();

      if (!response.ok) {
        // Handle validation errors from backend
        if (responseData.errors) {
          const errorMessages = responseData.errors.map(err => `${err.param}: ${err.msg}`);
          throw new Error(errorMessages.join('\n'));
        }
        throw new Error(responseData.message || 'Submission failed. Please try again.');
      }

      setShowSuccessModal(true);
      resetForm();

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

  const emailIsInvalid = touchedFields.email && formData.email && !isValidEmail(formData.email);
  const phoneIsInvalid = touchedFields.phone && formData.phone && !isValidPhone(formData.phone);

  return (
    <div id="quote" className="container my-5 py-4 bg-light rounded shadow-sm">
      <h2 className="text-center mb-4 fw-bold">Request a Quote</h2>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible className="mb-4">
          {error.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        {/* Name and Phone fields remain the same */}
        
        {/* Email field remains the same */}

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
          />
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

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your quote request has been submitted successfully!</p>
          <p>We will contact you shortly with your quote details.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuoteForm;