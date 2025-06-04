const Contact = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Contact Us</h2>
    <form className="row g-3 mx-auto" style={{ maxWidth: "600px" }}>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Your name" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Phone</label>
        <input type="tel" className="form-control" placeholder="Phone number" />
      </div>
      <div className="col-12">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4" placeholder="Tell us what you need"></textarea>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary mt-3">Send Message</button>
      </div>
    </form>
  </div>
);

export default Contact;
