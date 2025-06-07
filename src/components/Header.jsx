import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div className="container">
                    {/* Logo - Replace with your image */}
                    <Link to="/" className="navbar-brand">
                        <span className="fs-3 fw-bold text-primary">BLOCKBIZ</span>
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links - Matches your image exactly */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2">
                                <Link to="/" className="nav-link active fw-medium">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/about" className="nav-link fw-medium">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/products" className="nav-link fw-medium">Products</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/contact" className="nav-link fw-medium">Contact</Link>
                            </li>
                        </ul>

                        {/* Quote Button - Matches your image */}
                        <Link
                            to="/quote"
                            className="btn btn-primary px-4 py-2 fw-medium text-white"
                            style={{
                                borderRadius: '4px',
                                textDecoration: 'none', // Removes underline from Link
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
