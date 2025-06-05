import { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // You would typically add:
    // - API call to backend
    // - Success/error handling
    // - Form reset
  };

  return (
    <div id="quote" className="container my-5 py-5 bg-light rounded shadow">
      <h2 className="text-center mb-4">Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              className="form-control" 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              className="form-control" 
              placeholder="080XXXXXXXX" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="product" className="form-label">Product</label>
            <select 
              id="product"
              name="product"
              className="form-select" 
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Product --</option>
              <option value="Concrete Blocks">Concrete Blocks</option>
              <option value="Sand">Sand</option>
              <option value="Gravel">Gravel</option>
              <option value="Cement">Cement</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="quantity" className="form-label">Quantity (e.g. 100 bags/trips)</label>
            <input 
              type="text" 
              id="quantity"
              name="quantity"
              className="form-control" 
              placeholder="Enter quantity" 
              value={formData.quantity}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Delivery Address</label>
          <textarea 
            id="address"
            name="address"
            className="form-control" 
            rows="3" 
            placeholder="Enter full delivery address" 
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5 py-2">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;