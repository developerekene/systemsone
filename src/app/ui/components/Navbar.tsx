import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../Redux/store";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.user);
    console.log(userDetails.isLoggedIn)

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                SYSTEMS<span className="logoAccent">ONE</span>
            </Link>

            <div className="navLinks">
                <Link to="/explore-polls" className="link">Explore Polls</Link>
                <Link to="/trending" className="link">Trending</Link>
                <Link to="/how-it-works" className="link">How it Works</Link>
                <Link to="/verified" className="link">Verified Results</Link>
            </div>

            <div className="actions">

                <button
                    className="ctaBtn"
                    onClick={() => navigate('/create-poll')}
                >
                    Create a Poll
                </button>
                {userDetails.isLoggedIn === false ? (<button onClick={() => navigate('/sign-in')} className="loginBtn">Sign In</button>) :
                    (<div className="profileWrapper" ref={dropdownRef}>
                        {/* Profile Icon Trigger */}
                        <button
                            className="profileIconBtn"
                            onClick={() => setShowDropdown(!showDropdown)}
                            aria-label="User menu"
                        >
                            <div className="profileIcon">
                                {/* You can use an <img> here or a styled div with initials */}
                                <span>JD</span>
                            </div>
                        </button>

                        {/* Conditional Dropdown */}
                        {showDropdown && (
                            <div className="profileDropdown">
                                <div className="dropdownHeader">
                                    <p className="userName">John Doe</p>
                                    <p className="userEmail">john@systems.one</p>
                                </div>
                                <hr className="dropdownDivider" />
                                <button className="menuItem" onClick={() => { navigate('/profile'); setShowDropdown(false); }}>
                                    <span className="icon">👤</span> Profile
                                </button>
                                <button className="menuItem" onClick={() => { navigate('/settings'); setShowDropdown(false); }}>
                                    <span className="icon">⚙️</span> Settings
                                </button>
                                <hr className="dropdownDivider" />
                                <button className="signOutBtn" onClick={() => { console.log("Sign out"); setShowDropdown(false); }}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>)}
            </div>
        </nav>
    );
};

export default Navbar;