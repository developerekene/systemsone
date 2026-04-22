import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "../styles/SignIn.css";

const SignUp: React.FC = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        agreeTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Creating account for:", formData);
    };

    return (
        <div className="authContainer">
            <div className="authCard">

                <p className="footerText">
                    Back to <Link to="/">Home</Link>
                </p>

                <div className="authHeader">
                    <h2 className="authTitle">Join the System</h2>
                    <p className="authSubtitle">Create your verified account to start voting.</p>
                </div>

                <button className="googleBtn" onClick={() => console.log("Google Signup")}>
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg"
                        alt="Google"
                    />
                    Sign up with Google
                </button>

                <div className="divider">
                    <span>or use your email</span>
                </div>

                <form className="authForm" onSubmit={handleSignUp}>
                    <div className="inputGroup">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Min. 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="checkboxGroup">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="agreeTerms">
                            I agree to the <a href="#" className="pinkLink">Terms of Service</a> and <a href="#" className="pinkLink">Privacy Policy</a>.
                        </label>
                    </div>

                    <button type="submit" className="submitBtn">Create Account</button>
                </form>

                <p className="footerText">
                    Already have an account? <Link to="/sign-in">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;