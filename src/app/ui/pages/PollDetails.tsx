import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DETAILED_POLLS } from "../../utils/data/Data";
import "../styles/PollDetails.css";

const PollDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // --- Added Scroll-to-Top Logic ---
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); // Triggers whenever the poll ID changes
    // ---------------------------------

    const poll = DETAILED_POLLS.find((p) => p.id === id);

    if (!poll) {
        return <div className="errorState">Poll not found. <button onClick={() => navigate('/')}>Return Home</button></div>;
    }

    return (
        <div className="detailsPage">
            <div className="detailsContainer">
                <button className="backBtn" onClick={() => navigate(-1)}>← Back to Explore</button>

                <div className="detailsGrid">
                    <main className="detailsMain">
                        <header className="pollMainHeader">
                            <div className="authorBadge">
                                {/* Added: Author Avatar with fallback */}
                                {poll.author.avatar ? (
                                    <img src={poll.author.avatar} alt={poll.author.name} className="avatarImg" />
                                ) : (
                                    <div className="avatarSmall">{poll.author.name.charAt(0)}</div>
                                )}
                                
                                <div className="authorInfo">
                                    <div className="authorNameRow">
                                        <span>{poll.author.name}</span>
                                        {poll.author.verifiedStatus && <i className="verifiedIcon">✓</i>}
                                        <span className="entityTag">{poll.author.type}</span>
                                    </div>
                                    {/* Added: Reputation Score */}
                                    <div className="reputationBarWrapper">
                                        <span className="reputationLabel">Reputation: {poll.author.reputationScore}/100</span>
                                        <div className="miniRepBar">
                                            <div className="repFill" style={{ width: `${poll.author.reputationScore}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1>{poll.question}</h1>
                            <p className="descriptionText">{poll.description}</p>
                        </header>

                        <section className="resultsSection">
                            <h3>Live Results</h3>
                            <div className="resultsStack">
                                {poll.options.map((option) => {
                                    const percentage = ((option.count / poll.votes) * 100).toFixed(1);
                                    return (
                                        <div key={option.id} className="resultBarItem">
                                            <div className="barLabel">
                                                <span>{option.text}</span>
                                                <span>{percentage}%</span>
                                            </div>
                                            <div className="barContainer">
                                                {/* Added: hexColor branding for the progress fill */}
                                                <div 
                                                    className="barFill" 
                                                    style={{ 
                                                        width: `${percentage}%`,
                                                        backgroundColor: option.hexColor || "#003366" 
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="countLabel">{option.count.toLocaleString()} votes</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="voteActionBtn" onClick={() => navigate(`/vote/${poll.id}`)}>
                                Cast Your Vote Now
                            </button>
                        </section>

                        <section className="discussionSection">
                            <h2>Discussion ({poll.conversations.length})</h2>
                            <div className="commentList">
                                {poll.conversations.map((msg) => (
                                    <div key={msg.id} className="commentCard">
                                        <div className="commentHeader">
                                            <strong>{msg.userName}</strong>
                                            {msg.isVerifiedVoter && <span className="voterBadge">Verified Voter</span>}
                                            <span className={`sentiment ${msg.sentiment.toLowerCase()}`}>{msg.sentiment}</span>
                                        </div>
                                        <p>{msg.text}</p>
                                        <div className="commentFooter">
                                            <span>{new Date(msg.timestamp).toLocaleDateString()}</span>
                                            <span>❤️ {msg.likes}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                    <aside className="detailsSidebar">
                        <div className="sidebarCard auditCard">
                            <h4>Integrity Audit</h4>
                            <p>This poll is anchored to the system ledger.</p>
                            <div className="hashDisplay">
                                <code>{poll.auditTrail.hash}</code>
                            </div>
                            {/* Added: Blockchain Reference */}
                            {poll.auditTrail.blockchainRef && (
                                <div className="chainRef">
                                    <span>Chain Ref:</span>
                                    <code>{poll.auditTrail.blockchainRef}</code>
                                </div>
                            )}
                            <span className="auditDate">Last verified: {new Date(poll.auditTrail.lastAudited).toLocaleDateString()}</span>
                        </div>

                        <div className="sidebarCard infoCard">
                            <h4>Poll Information</h4>
                            <div className="infoItem">
                                <span>Category</span>
                                <strong>{poll.category}</strong>
                            </div>
                            <div className="infoItem">
                                <span>Total Volume</span>
                                <strong>{poll.votes.toLocaleString()}</strong>
                            </div>
                            {/* Added: Visibility and Status */}
                            <div className="infoItem">
                                <span>Visibility</span>
                                <span className="visibilityTag">{poll.visibility}</span>
                            </div>
                            <div className="infoItem">
                                <span>Status</span>
                                <span className={`statusLabel ${poll.status.toLowerCase()}`}>{poll.status}</span>
                            </div>
                            {/* Added: Created Date */}
                            <div className="infoItem">
                                <span>Started</span>
                                <strong>{new Date(poll.createdAt).toLocaleDateString()}</strong>
                            </div>
                            <div className="infoItem">
                                <span>Ends In</span>
                                <strong className="pinkText">{poll.timeLeft}</strong>
                            </div>
                        </div>

                        <div className="tagCloud">
                            {poll.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default PollDetails;