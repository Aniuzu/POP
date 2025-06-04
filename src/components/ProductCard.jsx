const ProductCard = ({ title, image, description }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text small">{description}</p>
        <a href="/quote" className="btn btn-outline-primary btn-sm">Request Quote</a>
      </div>
    </div>
  </div>
);

export default ProductCard;
