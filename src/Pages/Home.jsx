import Hero from "../components/Hero";
import Services from "./Services";
import CarouselSection from "../components/Carousel"
import WhyChooseUs from "../components/WhyChooses";

const Home = () => (
  <>
    <Hero />
    <div className="my-5 px-3 text-center">
      <h2>About Us</h2>
      <p className="lead">
        We are a leading manufacturer of high-quality concrete blocks and supplier of other building materials. 
        Serving construction companies and individual builders.
      </p>
    </div>
    <CarouselSection />
    <WhyChooseUs />
  </>
);

export default Home;
