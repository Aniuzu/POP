const QuoteForm = () => (
  <div id="quote" className="container my-5 py-5 bg-light rounded shadow">
    <h2 className="text-center mb-4">Request a Quote</h2>
    <form>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone / WhatsApp</label>
          <input type="tel" className="form-control" placeholder="080XXXXXXXX" required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Product</label>
          <select className="form-select" required>
            <option value="">-- Select Product --</option>
            <option>Concrete Blocks</option>
            <option>Sand</option>
            <option>Gravel</option>
            <option>Cement</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Quantity (e.g. 100 bags / trips)</label>
          <input type="text" className="form-control" placeholder="Enter quantity" required />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Delivery Address</label>
        <textarea className="form-control" rows="3" placeholder="Enter full delivery address" required></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-success px-5">
          Submit Request
        </button>
      </div>
    </form>
  </div>
);

export default QuoteForm;
