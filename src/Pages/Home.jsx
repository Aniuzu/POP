import Hero from "../components/Hero";
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Hero />
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4">Trusted Building Materials Supplier</h2>
            <p className="lead mb-4">
              With over 15 years of experience, we provide quality materials for all construction needs.
            </p>
            <Link to="/about" className="btn btn-outline-primary">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
