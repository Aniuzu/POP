import BlockImg from "../assests/SolidBlock.png";
import SandImg from '../assests/Sand.png'
import GravelImg from '../assests/Gravel.png'; // make sure the filename matches exactly

const CarouselSection = () => (
  <div id="productCarousel" className="carousel slide my-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
         <img loading="lazy" src={BlockImg} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Blocks" />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5>Concrete Blocks</h5>
          <p>Durable and premium quality blocks for every structure.</p>
        </div>
      </div>
      <div className="carousel-item">
         <img loading="lazy" src={SandImg} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Sand" />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5>Sharp Sand</h5>
          <p>Washed and clean sharp sand ready for site work.</p>
        </div>
      </div>
      <div className="carousel-item">
         <img loading="lazy" src={GravelImg} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Gravel" />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
          <h5>Granite & Gravel</h5>
          <p>Strong and stable aggregates for solid foundations.</p>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
);

export default CarouselSection;
