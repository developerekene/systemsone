import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Trending.css";

interface TrendingPoll {
    id: string;
    rank: number;
    question: string;
    velocity: string; // e.g., "+400 votes/hr"
    totalVotes: number;
    category: string;
}

const TRENDING_DATA: TrendingPoll[] = [
    { id: "101", rank: 1, question: "Should cities offer free public transit to reduce carbon emissions?", velocity: "+1.2k votes/hr", totalVotes: 45200, category: "Environment" },
    { id: "102", rank: 2, question: "Is the current 40-hour work week obsolete in the AI era?", velocity: "+850 votes/hr", totalVotes: 32100, category: "Labor" },
    { id: "103", rank: 3, question: "Should digital currency replace physical cash by 2030?", velocity: "+600 votes/hr", totalVotes: 12400, category: "Finance" },
    { id: "104", rank: 4, question: "Mandatory coding classes in primary schools: Yes or No?", velocity: "+450 votes/hr", totalVotes: 8900, category: "Education" },
    { id: "105", rank: 5, question: "Should social media platforms require ID verification?", velocity: "+300 votes/hr", totalVotes: 55600, category: "Tech Policy" },
    { id: "106", rank: 6, question: "Is Mars colonization a realistic goal for the next decade?", velocity: "+210 votes/hr", totalVotes: 15200, category: "Science" },
];

const Trending: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="trendingPage">
                <header className="trendingHeader">
                    <span className="liveBadge">● LIVE PULSE</span>
                    <h1>Trending Now</h1>
                    <p>The topics shaping the conversation across the globe this hour.</p>
                </header>

                <div className="trendingList">
                    {TRENDING_DATA.map((poll) => (
                        <div key={poll.id} className="trendingItem" onClick={() => navigate(`/vote/${poll.id}`)}>
                            <div className="rankCol">
                                <span className="rankNumber">#{poll.rank}</span>
                            </div>

                            <div className="contentCol">
                                <div className="itemMeta">
                                    <span className="catTag">{poll.category}</span>
                                    <span className="velocityText">📈 {poll.velocity}</span>
                                </div>
                                <h3 className="itemQuestion">{poll.question}</h3>
                            </div>

                            <div className="statsCol">
                                <div className="statGroup">
                                    <span className="statLabel">Total Votes</span>
                                    <span className="statValue">{poll.totalVotes.toLocaleString()}</span>
                                </div>
                                <button className="quickVoteBtn">Vote Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Trending;