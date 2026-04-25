import React from "react";
import Navbar from "../components/Navbar";
import "../styles/VerificationLogic.css";

const VerificationLogic: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="verifyPage">
                <header className="verifyHero">
                    <div className="trustShield">🛡️</div>
                    <h1>Trust is Engineered.</h1>
                    <p>Every vote cast on SystemsOne undergoes a multi-layered verification process to ensure total digital integrity.</p>
                </header>

                <div className="logicGrid">
                    {/* Step 1: Identity */}
                    <div className="stepSection">
                        <div className="stepNumber">01</div>
                        <div className="stepContent">
                            <h3>Biometric & ID Linkage</h3>
                            <p>Before a ballot is issued, we verify the user’s identity using multi-factor authentication (MFA) and, where required, government-issued ID matching. This prevents double-voting and bot interference.</p>
                            <ul className="featureList">
                                <li><span>✓</span> Unique Voter ID Generation</li>
                                <li><span>✓</span> Anti-Bot Sybil Protection</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2: Cryptography */}
                    <div className="stepSection">
                        <div className="stepNumber">02</div>
                        <div className="stepContent">
                            <h3>Cryptographic Hashing</h3>
                            <p>Once you vote, your selection is transformed into a unique hash. This hash is immutable; it cannot be altered without breaking the entire chain of the poll, making tampering impossible to hide.</p>
                            <div className="codeSnippet">
                                SHA-256: 8f92ac3...92b1
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Audit Trail */}
                    <div className="stepSection">
                        <div className="stepNumber">03</div>
                        <div className="stepContent">
                            <h3>Public Audit Trail</h3>
                            <p>After the poll closes, we generate a public audit file. Anyone can download this ledger to verify that their specific Receipt ID was counted correctly without revealing who they voted for.</p>
                            <button className="downloadBtn">Download Audit Schema</button>
                        </div>
                    </div>
                </div>

                <section className="integrityBanner">
                    <h2>100% Deterministic Results</h2>
                    <p>We don't just count votes; we prove them. Our system is open to third-party audits by independent security firms.</p>
                    <div className="badgeRow">
                        <span className="certBadge">ISO 27001</span>
                        <span className="certBadge">SOC2 Type II</span>
                        <span className="certBadge">E2E Verifiable</span>
                    </div>
                </section>
            </div>
        </>
    );
};

export default VerificationLogic;