import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Quote from './Pages/Quote';
import Products from "./components/Products"
import FloatingHomeButton from "./components/FloatingHomeButton";
import Contact from "./components/Contact";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper
import 'jquery';




const App = () => (
  <>
  <Header />
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    <FloatingHomeButton />
  </>
);

export default App;
