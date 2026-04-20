import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure this path correctly points to your styles folder

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                SYSTEMS<span className="logoAccent">ONE</span>
            </Link>

            <div className="navLinks">
                <Link to="/explore" className="link">Explore Polls</Link>
                <Link to="/trending" className="link">Trending</Link>
                <Link to="/how-it-works" className="link">How it Works</Link>
                <Link to="/verified" className="link">Verified Results</Link>
            </div>

            <div className="actions">
                <button className="loginBtn">Sign In</button>
                <button
                    className="ctaBtn"
                    onClick={() => navigate('/create-poll')}
                >
                    Create a Poll
                </button>
            </div>
        </nav>
    );
};

export default Navbar;