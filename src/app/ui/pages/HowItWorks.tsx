import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/HowItWorks.css";

const STEPS = [
    {
        number: "01",
        title: "Secure Verification",
        description: "Link your identity using our multi-factor authentication. We ensure every user is a unique human to prevent bot manipulation and double-voting.",
        icon: "🛡️"
    },
    {
        number: "02",
        title: "Explore & Engage",
        description: "Browse active polls from your local community or global interests. Filter by category to find the topics you care about most.",
        icon: "🌍"
    },
    {
        number: "03",
        title: "Cast Your Vote",
        description: "Our encrypted system records your choice. Whether it's Ranked Choice or Simple Majority, your vote is anonymous but verifiable.",
        icon: "🗳️"
    },
    {
        number: "04",
        title: "Audit Results",
        description: "Once a poll closes, view the deep analytics. Our open-data policy allows anyone to audit the result integrity in real-time.",
        icon: "📊"
    }
];

const HowItWorks: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="howItWorksPage">
                {/* Hero Section */}
                <header className="howHero">
                    <span className="howBadge">Transparency First</span>
                    <h1>Democracy at the speed of <span className="orangeText">thought.</span></h1>
                    <p>SystemsOne is built on the principle that public opinion should be fast, secure, and impossible to ignore.</p>
                </header>

                {/* Steps Timeline */}
                <section className="stepsContainer">
                    {STEPS.map((step, index) => (
                        <div key={index} className="stepRow">
                            <div className="stepNumber">{step.number}</div>
                            <div className="stepCard">
                                <div className="stepIcon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Security Callout */}
                <section className="integritySection">
                    <div className="integrityContent">
                        <h2>Unshakeable Integrity</h2>
                        <p>
                            We use decentralized ledger technology to timestamp every poll.
                            This means results cannot be altered after the fact by us,
                            by governments, or by third parties.
                        </p>
                        <div className="integrityBadgeGrid">
                            <div className="iBadge">✓ Bot-Proof</div>
                            <div className="iBadge">✓ Fully Encrypted</div>
                            <div className="iBadge">✓ Publicly Auditable</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="howFooterCta">
                    <h2>Ready to make an impact?</h2>
                    <button className="getStartedBtn" onClick={() => navigate('/signup')}>
                        Get Started Now
                    </button>
                </section>
            </div>
        </>
    );
};

export default HowItWorks;