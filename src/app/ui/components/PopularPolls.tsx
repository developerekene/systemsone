import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PopularPolls.css";

interface Poll {
  id: string;
  question: string;
  votes: number;
  timeLeft: string;
  category: string;
}

const MOCK_POLLS: Poll[] = [
  { id: "1", question: "Should Remote Work be a legal right for all tech employees?", votes: 12402, timeLeft: "2 days", category: "Labor" },
  { id: "2", question: "What is the most effective solution for urban traffic congestion?", votes: 8920, timeLeft: "5 hours", category: "Infrastructure" },
  { id: "3", question: "Should AI-generated art be protected by copyright laws?", votes: 15300, timeLeft: "12 hours", category: "Technology" },
  { id: "4", question: "Universal Basic Income: A necessity or a luxury for 2026?", votes: 22105, timeLeft: "1 day", category: "Economics" },
  { id: "5", question: "Should cities implement 4-day work weeks for public sectors?", votes: 6740, timeLeft: "3 days", category: "Society" },
  { id: "6", question: "Is nuclear energy the primary solution to carbon neutrality?", votes: 19820, timeLeft: "6 hours", category: "Climate" },
];

const PopularPolls: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pollsSection">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Popular Polls</h2>
        <p className="sectionSubtitle">Join the thousands of citizens shaping the future today.</p>
      </div>

      <div className="pollsGrid">
        {MOCK_POLLS.map((poll) => (
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

            <button 
              className="voteBtn"
              onClick={() => navigate(`/vote/${poll.id}`)}
            >
              Cast Your Vote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPolls;