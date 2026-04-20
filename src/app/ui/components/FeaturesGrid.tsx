import React from "react";
import "../styles/FeaturesGrid.css";

const FeaturesGrid: React.FC = () => {
    return (
        <section className="bentoContainer">
            <div className="bentoHeader">
                <h2>Built for transparent democracy.</h2>
            </div>

            <div className="bentoGrid">
                {/* Feature 1: Live Analytics (Large) */}
                <div className="bentoCard liveResults">
                    <h3 className="bentoCardTitle">Real-time Analytics</h3>
                    <p className="bentoCardDesc">
                        Watch public opinion shift in seconds. Our live engine processes
                        thousands of votes instantly with beautiful visualization.
                    </p>
                    <div className="visualArea">
                        <div className="chartMock">
                            <div className="bar" style={{ height: '40%', background: '#FF69B4' }}></div>
                            <div className="bar" style={{ height: '80%', background: '#FF8C00' }}></div>
                            <div className="bar" style={{ height: '60%', background: '#003366' }}></div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Anti-Bot (Small) */}
                <div className="bentoCard security">
                    <h3 className="bentoCardTitle">Anti-Bot Protection</h3>
                    <p className="bentoCardDesc">One human, one vote. Guaranteed.</p>
                    <div className="visualArea iconCenter">
                        <span className="shieldIcon">🛡️</span>
                    </div>
                </div>

                {/* Feature 3: Social Sharing (Vertical Tall) */}
                <div className="bentoCard sharing">
                    <h3 className="bentoCardTitle">Viral by Design</h3>
                    <p className="bentoCardDesc">
                        Optimized share cards for Twitter, WhatsApp, and LinkedIn to get your poll trending.
                    </p>
                    <div className="visualArea">
                        <div className="shareCardMock">
                            <div className="mockLine"></div>
                            <div className="mockLine short"></div>
                            <div className="mockButton">SHARE</div>
                        </div>
                    </div>
                </div>

                {/* Feature 4: Customization (Wide) */}
                <div className="bentoCard custom">
                    <h3 className="bentoCardTitle">Custom Poll Logic</h3>
                    <p className="bentoCardDesc">
                        Multiple choice, ranked choice, or weighted voting. Tailor the system to your needs.
                    </p>
                    <div className="swatchesContainer">
                        <div className="pollOptionMock">Option A</div>
                        <div className="pollOptionMock">Option B</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;