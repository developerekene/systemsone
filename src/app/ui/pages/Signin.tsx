import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signing in with:", email, password);
    };

    const handleGoogleSignIn = () => {
        console.log("Google Auth Triggered");
    };

    return (
        <div className="authContainer">
            <div className="authCard">
                <p className="footerText">
                    Back to <Link to="/">Home</Link>
                </p>
                <div className="authHeader">
                    <h2 className="authTitle">Welcome back</h2>
                    <p className="authSubtitle">Sign in to cast your vote and track results.</p>
                </div>

                {/* Google Sign Up Button */}
                <button className="googleBtn" onClick={handleGoogleSignIn}>
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg"
                        alt="Google"
                    />
                    Continue with Google
                </button>

                <div className="divider">
                    <span>or sign in with email</span>
                </div>

                <form className="authForm" onSubmit={handleEmailSignIn}>
                    <div className="inputGroup">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inputGroup">
                        <div className="labelRow">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgotLink">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submitBtn">Sign In to SystemsOne</button>
                </form>

                <p className="footerText">
                    Don't have an account? <Link to="/sign-up">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;