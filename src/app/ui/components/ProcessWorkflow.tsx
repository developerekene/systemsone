import React from "react";
import "../styles/ProcessWorkflow.css";
import Navbar from "./Navbar";

const ProcessWorkflow: React.FC = () => {
    return (
        <>
            
            <section className="workflowContainer">
                {/* Row 1: The Creation Process */}
                <div className="workflowRow">
                    <div className="workflowContent">
                        <h2>Create polls in seconds, not hours.</h2>
                        <p>
                            Choose from multiple voting formats—Ranked Choice, Simple Majority,
                            or Weighted Voting. Our intuitive builder lets you set rules,
                            deadlines, and voter requirements without touching a line of code.
                        </p>
                        <a href="/start-building" className="workflowLink">
                            Start building your poll →
                        </a>
                    </div>

                    <div className="workflowVisual">
                        <div className="pollMockup">
                            <div className="pollHeader">New Public Poll <span className="dot">•</span></div>
                            <div className="pollOptionList">
                                <div className="pollItem">
                                    <div className="itemLeft"><span>⦿</span> Option A: Green Energy</div>
                                    <span className="dragHandle">⠿</span>
                                </div>
                                <div className="pollItem activeItem">
                                    <div className="itemLeft"><span>⦿</span> Option B: Solar Expansion</div>
                                    <span className="editIcon">✎</span>
                                </div>
                                <div className="pollItem">
                                    <div className="itemLeft"><span>⦿</span> Option C: Wind Infrastructure</div>
                                    <span className="dragHandle">⠿</span>
                                </div>
                            </div>
                            <button className="addOptionBtn">+ Add New Option</button>
                        </div>
                    </div>
                </div>

                {/* Row 2: Verification & Results */}
                <div className="workflowRow rowReverse">
                    <div className="workflowContent">
                        <h2>Verified, unshakeable results.</h2>
                        <p>
                            SystemsOne uses advanced anti-fraud detection to ensure every vote
                            belongs to a unique, real user. View your data in crystal-clear
                            interactive charts and export them for official reporting.
                        </p>
                        <a href="#" className="workflowLink">
                            How we verify votes
                        </a>
                    </div>

                    <div className="workflowVisual">
                        <div className="resultsDashboard">
                            <div className="dashboardHeader">
                                Live Results <span className="statusPulse">Live</span>
                            </div>
                            <div className="resultStatsGrid">
                                <div className="statBox">
                                    <span className="statLabel">Total Votes</span>
                                    <span className="statValue">12,402</span>
                                </div>
                                <div className="statBox highlightBox">
                                    <span className="statLabel">Integrity Score</span>
                                    <span className="statValue">99.9%</span>
                                </div>
                            </div>
                            <div className="miniChart">
                                <div className="miniBar orangeBar" style={{ width: '85%' }}></div>
                                <div className="miniBar pinkBar" style={{ width: '45%' }}></div>
                                <div className="miniBar blueBar" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProcessWorkflow;