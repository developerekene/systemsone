import React from "react";
import "../styles/TrustBar.css";

const PARTNERS = [
    "TECH CRUNCH",
    "GOV-VOTE",
    "COMMUNITY FIRST",
    "GLOBAL OPINION",
    "DATA INSIGHTS",
    "TRUST-WATCH",
    "OPEN SOURCE LABS",
];

const TrustBar: React.FC = () => {
    // Double the array to create a seamless infinite loop
    const displayPartners = [...PARTNERS, ...PARTNERS];

    return (
        <div className="trustContainer">
            <p className="trustLabel">Official results and analytics powered by</p>

            <div className="trustWrapper">
                <div className="trustTrack">
                    {displayPartners.map((name, index) => (
                        <span key={index} className="partnerName">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;