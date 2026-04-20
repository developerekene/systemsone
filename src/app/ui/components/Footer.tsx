import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footerContainer">
      {/* Final CTA Section */}
      <div className="footerCtaCard">
        <h2>Make your voice the <span className="pinkText">one</span> that counts.</h2>
        <p>
          Join a global community of transparent decision-makers. 
          Start your first public poll in less than 60 seconds.
        </p>
        <button className="footerMainBtn">Create a Poll Now</button>
      </div>

      {/* Main Footer Links */}
      <div className="footerGrid">
        <div className="brandCol">
          <h3 className="footerLogo">SYSTEMS<span className="pinkText">ONE</span></h3>
          <p className="brandTagline">
            The definitive platform for public opinion and verified digital voting.
          </p>
          <div className="footerSocials">
            <a href="#" className="socialIcon">𝕏</a>
            <a href="#" className="socialIcon">in</a>
            <a href="#" className="socialIcon">IG</a>
          </div>
        </div>

        <div className="footerColumn">
          <h4>Platform</h4>
          <div className="footerLinks">
            <Link to="/explore">Explore Polls</Link>
            <Link to="/trending">Trending Now</Link>
            <Link to="/verified">Verified Results</Link>
            <Link to="/templates">Poll Templates</Link>
          </div>
        </div>

        <div className="footerColumn">
          <h4>Resources</h4>
          <div className="footerLinks">
            <Link to="/how-it-works">How it Works</Link>
            <Link to="/security">Voting Integrity</Link>
            <Link to="/api">Developer API</Link>
            <Link to="/support">Help Center</Link>
          </div>
        </div>

        <div className="footerColumn">
          <h4>Transparency</h4>
          <div className="footerLinks">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/compliance">Compliance</Link>
          </div>
        </div>
      </div>

      <div className="footerCopyright">
        © 2026 SYSTEMS<span className="pinkText">ONE</span>. Empowering public voice through technology.
      </div>
    </footer>
  );
}

export default Footer;