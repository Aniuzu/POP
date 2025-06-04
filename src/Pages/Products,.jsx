import ProductCard from "../components/ProductCard";

const productData = [
  {
    title: "Concrete Blocks",
    image: "/src/assets/blocks.jpg",
    description: "Durable concrete blocks for foundations, walls, and structures.",
  },
  {
    title: "Sharp Sand",
    image: "/src/assets/sand.jpg",
    description: "Clean, sieved sand for plastering and block molding.",
  },
  {
    title: "Cement",
    image: "/src/assets/cement.jpg",
    description: "Top-quality cement for all construction needs.",
  },
  {
    title: "Granite & Gravel",
    image: "/src/assets/gravel.jpg",
    description: "Crushed stones and gravel for sturdy foundations.",
  },
];

const Products = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Our Products</h2>
    <div className="row">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default Products;
