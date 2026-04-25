import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/UserDashboard.css";

const MY_POLLS = [
    { id: 1, title: "Is the new office coffee brand acceptable?", status: "Live", participants: 42, trends: "+12% today" },
    { id: 2, title: "Vote on the Summer Gala Theme", status: "Closed", participants: 156, trends: "Finalized" },
];

const RECENT_ACTIVITY = [
    { id: 101, action: "Voted in", target: "Global AI Rights Act", time: "2 hours ago" },
    { id: 102, action: "Verified identity for", target: "Local Election 2026", time: "1 day ago" },
    { id: 103, action: "Shared poll", target: "4-Day Work Week", time: "3 days ago" },
];

const UserDashboard: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="dashboardPage">
                {/* Dashboard Hero */}
                <header className="dashboardHero">
                    <div className="heroTop">
                        <div className="userWelcome">
                            <h1>Welcome back, <span className="pinkText">John</span></h1>
                            <p>Your voting power is verified and active.</p>
                        </div>
                        <div className="trustMetric">
                            <span className="metricLabel">Trust Score</span>
                            <span className="metricValue">99.8</span>
                            <div className="metricBar"><div className="fill" style={{ width: '99%' }}></div></div>
                        </div>
                    </div>
                </header>

                <div className="dashboardLayout">
                    {/* Main Stats Row */}
                    <section className="statsRow">
                        <div className="statCard">
                            <span className="statIcon">🗳️</span>
                            <div>
                                <span className="statNum">24</span>
                                <p>Votes Cast</p>
                            </div>
                        </div>
                        <div className="statCard">
                            <span className="statIcon">📜</span>
                            <div>
                                <span className="statNum">3</span>
                                <p>Polls Created</p>
                            </div>
                        </div>
                        <div className="statCard">
                            <span className="statIcon">🛡️</span>
                            <div>
                                <span className="statNum">12</span>
                                <p>Verifications</p>
                            </div>
                        </div>
                    </section>

                    <div className="dashboardGrid">
                        {/* Active Management Area */}
                        <main className="dashboardMain">
                            <div className="sectionHeader">
                                <h2>Manage Your Polls</h2>
                                <button className="createActionBtn">+ New Poll</button>
                            </div>

                            <div className="myPollsList">
                                {MY_POLLS.map(poll => (
                                    <div key={poll.id} className="miniPollCard">
                                        <div className="pollInfo">
                                            <span className={`statusDot ${poll.status.toLowerCase()}`}></span>
                                            <h3>{poll.title}</h3>
                                        </div>
                                        <div className="pollMeta">
                                            <span><strong>{poll.participants}</strong> voters</span>
                                            <span className="trendText">{poll.trends}</span>
                                            <button className="manageBtn">Manage</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>

                        {/* Sidebar: Activity Feed */}
                        <aside className="dashboardSidebar">
                            <h3>Activity Feed</h3>
                            <div className="activityTimeline">
                                {RECENT_ACTIVITY.map(act => (
                                    <div key={act.id} className="activityItem">
                                        <p><strong>{act.action}</strong> {act.target}</p>
                                        <span>{act.time}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="promoBox">
                                <h4>Verify Your ID</h4>
                                <p>Get the "Verified Citizen" badge to access high-stakes government polls.</p>
                                <button className="verifySmallBtn">Start Verification</button>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;