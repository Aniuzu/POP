import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close navbar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div className="container">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
                        <span className="fs-3 fw-bold text-primary">Evantlm services Nig ltd</span>
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div 
                        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                        id="navbarContent"
                    >
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2">
                                <Link 
                                    to="/" 
                                    className={`nav-link fw-medium ${location.pathname === '/' ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link 
                                    to="/about" 
                                    className={`nav-link fw-medium ${location.pathname === '/about' ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link 
                                    to="/products" 
                                    className={`nav-link fw-medium ${location.pathname === '/products' ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link 
                                    to="/contact" 
                                    className={`nav-link fw-medium ${location.pathname === '/contact' ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Quote Button */}
                        <Link
                            to="/quote"
                            className="btn btn-primary px-4 py-2 fw-medium text-white"
                            style={{
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}