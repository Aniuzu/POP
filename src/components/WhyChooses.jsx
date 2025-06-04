

const features = [
  { icon: "bi-check-circle", title: "High-Quality Products", text: "Exceptional service and top-notch materials." },
  { icon: "bi-truck", title: "Reliable Delivery", text: "On-time delivery every time." },
  { icon: "bi-star", title: "Proven Track Record", text: "Trusted by clients and builders." },
];

const WhyChooseUs = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Why Choose Us</h2>
    <div className="row">
      {features.map((feat, idx) => (
        <div className="col-md-4 text-center mb-4" key={idx}>
          <div className="p-4 border rounded shadow-sm">
            <i className={`bi ${feat.icon} display-4 text-primary mb-3`}></i>
            <h5 className="fw-bold">{feat.title}</h5>
            <p>{feat.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WhyChooseUs;
