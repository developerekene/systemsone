import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/ExplorePolls.css";

const CATEGORIES = ["All Topics", "Politics", "Technology", "Entertainment", "Environment", "Sports", "Economy"];

const POLLS_DATA = [
    { id: 1, title: "Should AI have legal personhood?", votes: "42.5k", category: "Technology", status: "Live", endIn: "2h" },
    { id: 2, title: "Ban single-use plastics in all city parks?", votes: "12.1k", category: "Environment", status: "Live", endIn: "14h" },
    { id: 3, title: "Is a 4-day work week sustainable for retail?", votes: "8.9k", category: "Economy", status: "Closed", endIn: "Ended" },
    { id: 4, title: "Predicting the 2026 World Cup Winner", votes: "105k", category: "Sports", status: "Live", endIn: "5d" },
    { id: 5, title: "Mandatory coding classes in primary schools?", votes: "15.3k", category: "Education", status: "Live", endIn: "1d" },
    { id: 6, title: "Should the city invest in a new light rail system?", votes: "31.2k", category: "Politics", status: "Live", endIn: "3h" },
];

const ExplorePolls: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All Topics");

    return (
        <>
            <Navbar />
            <div className="explorePage">
                {/* Page Header */}
                <header className="exploreHeader">
                    <div className="headerContent">
                        <h1 className="exploreTitle">Explore <span className="pinkText">Public Opinion</span></h1>
                        <p className="exploreSubtitle">Discover what the world is thinking about the topics that matter today.</p>
                    </div>

                    <div className="exploreSearch">
                        <input type="text" placeholder="Search for polls, topics, or keywords..." />
                        <button className="searchBtn">Search</button>
                    </div>
                </header>

                <div className="exploreLayout">
                    {/* Sidebar Filter */}
                    <aside className="exploreSidebar">
                        <h3>Categories</h3>
                        <ul className="categoryList">
                            {CATEGORIES.map(cat => (
                                <li
                                    key={cat}
                                    className={activeTab === cat ? "activeCat" : ""}
                                    onClick={() => setActiveTab(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Grid */}
                    <main className="exploreGrid">
                        <div className="gridHeader">
                            <span>Showing: <strong>{activeTab}</strong></span>
                            <select className="sortDropdown">
                                <option>Most Recent</option>
                                <option>Most Votes</option>
                                <option>Ending Soon</option>
                            </select>
                        </div>

                        <div className="pollsDisplay">
                            {POLLS_DATA.map(poll => (
                                <div key={poll.id} className="explorePollCard">
                                    <div className="cardTop">
                                        <span className={`statusTag ${poll.status.toLowerCase()}`}>
                                            {poll.status === "Live" && <span className="pulse"></span>}
                                            {poll.status}
                                        </span>
                                        <span className="categoryLabel">{poll.category}</span>
                                    </div>
                                    <h3 className="pollQuestionText">{poll.title}</h3>
                                    <div className="cardBottom">
                                        <div className="statInfo">
                                            <span className="statItem"><strong>{poll.votes}</strong> votes</span>
                                            <span className="statItem">• {poll.endIn} left</span>
                                        </div>
                                        <button className="pollVoteBtn">Vote Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ExplorePolls;