import React from "react";
import { useNavigate } from "react-router-dom";
import { DETAILED_POLLS } from "../../utils/data/Data";
import "../styles/PopularPolls.css";

const PopularPolls: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pollsSection">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Popular Polls</h2>
        <p className="sectionSubtitle">Join the thousands of citizens shaping the future today.</p>
      </div>

      <div className="pollsGrid">
        {DETAILED_POLLS.map((poll) => (
          <div key={poll.id} className="pollCard">
            <div className="cardHeader">
              <span className="categoryTag">{poll.category}</span>
              <span className="trendingTag">🔥 Trending</span>
            </div>

            <h3 className="pollQuestion">{poll.question}</h3>

            <div className="pollStats">
              <span className="voteCount"><strong>{poll.votes.toLocaleString()}</strong> votes</span>
              <span className="timeBadge">{poll.timeLeft} left</span>
            </div>

            {/* Action Container for Two Buttons */}
            <div className="cardActions">
              <button
                className="viewBtn"
                onClick={() => navigate(`/poll/${poll.id}`)}
              >
                View Poll
              </button>
              <button
                className="voteBtn"
                onClick={() => navigate(`/vote/${poll.id}`)}
              >
                Cast Your Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPolls;