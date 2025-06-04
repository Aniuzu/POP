import { Link } from "react-router-dom";
import heroImg from '../assests/block.png';// Add this image to assets folder

const Hero = () => (
  <div
    className="text-white d-flex align-items-center"
    style={{
      background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.3)), url(${heroImg}) center/cover`,
      height: "80vh",
    }}
  >
    <div className="container text-start">
      <h1 className="display-5 fw-bold">Your Trusted Supplier of Blocks & Building Materials</h1>
      <p className="lead">We deliver quality blocks, sand, stones, and cement  fast and affordable.</p>
      <Link to="/quote">
        <button className="btn btn-success px-4">Get Quote</button>
      </Link>


    </div>
  </div>
);

export default Hero;
