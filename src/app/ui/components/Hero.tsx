import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="heroSection">
      <div className="badge">
        <span className="sparkle">⚡</span> THE POWER OF THE VOTE
      </div>

      <h1 className="heroTitle">
        Every opinion <span className="highlightPink">counts.</span>
        <br />
        Every voice <span className="highlightOrange">matters.</span>
      </h1>

      <p className="heroSubtitle">
        Create instant polls, share them with the world, and watch the results 
        unfold in real-time. SystemsOne is the transparent home for public opinion.
      </p>

      <div className="heroButtonGroup">
        <button 
          className="heroPrimaryBtn" 
          onClick={() => navigate('/create-poll')}
        >
          Create Your Poll
        </button>
        <button 
          className="heroSecondaryBtn" 
          onClick={() => navigate('/explore')}
        >
          Explore Live Polls
        </button>
      </div>
    </section>
  );
}

export default Hero;