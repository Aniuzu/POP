import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const FloatingHomeButton = () => {
  return (
    <Link
      to="/"
      className="btn btn-primary position-fixed d-flex align-items-center justify-content-center"
      style={{
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        zIndex: 1050,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <AiFillHome size={24} />
    </Link>
  );
};

export default FloatingHomeButton;
