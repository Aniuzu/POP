const Footer = () => (
  <footer className="bg-dark text-light py-5">
    <div className="container d-flex justify-content-between flex-wrap">
      <div>
        <h5>What Our Customers Are Saying</h5>
        <p><em>"Exceptional service and top notch materials. Highly recommended."</em></p>
        <p>St DeadMan</p>
      </div>
      <div>
        <h5>Contact Us</h5>
        <p>1734 Example St<br />City, State. 17245</p>
        <p>Email: info@example.com</p>
        <p>
          <a href="https://wa.me/2348123456789" target="_blank" rel="noreferrer" className="btn btn-success btn-sm">
            <i className="bi bi-whatsapp"></i> Chat on WhatsApp
          </a>
        </p>
      </div>
    </div>
    <div className="container mt-3">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153..."
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </footer>
);

export default Footer;
