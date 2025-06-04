import ConcreteBlock from "../assests/SolidBlock.png"
import Sand from '../assests/Sand.png';
import Cement from '../assests/Cement.png';
import Gravel from '../assests/Gravel.png';
import Block from '../assests/block.png';



const products = [
  { name: "Concrete Blocks", img: ConcreteBlock },
  { name: "Sand", img: Sand },
  { name: "Cement", img: Cement },
  { name: "Gravel", img: Gravel },
  { name: "Block", img: Block },
];

const Service = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Products and Services</h2>
    <div className="row">
      {products.map((item, idx) => (
        <div className="col-md-3 mb-4" key={idx}>
          <div className="card shadow-sm h-100">
            <img
              src={item.img} // ✅ Corrected here
              alt={item.name}
              className="card-img-top"
              style={{ height: "160px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Service;