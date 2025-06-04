import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./Pages/Services"
import About from "./pages/About";
import Quote from './Pages/Quote';
import Contact from "./pages/Contact";
import Products from "./pages/Products,";
import FloatingHomeButton from "./components/FloatingHomeButton";



const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/quote" element={<Quote />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <FloatingHomeButton />
    
    <Footer />
  </>
);

export default App;
