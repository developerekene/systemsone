import React from "react";
import Navbar from "../components/Navbar";
import "../styles/VerifiedResults.css";

interface VerifiedPoll {
    id: string;
    title: string;
    status: "Finalized" | "Audited";
    totalVotes: number;
    integrityScore: string;
    date: string;
}

const VERIFIED_DATA: VerifiedPoll[] = [
    { id: "V-992", title: "Proposed City Park Renovation 2026", status: "Audited", totalVotes: 45201, integrityScore: "99.98%", date: "April 12, 2026" },
    { id: "V-841", title: "Global Tech Remote Work Standardization", status: "Finalized", totalVotes: 128400, integrityScore: "100%", date: "April 08, 2026" },
    { id: "V-772", title: "Universal Basic Income Pilot - District A", status: "Audited", totalVotes: 8921, integrityScore: "99.95%", date: "March 29, 2026" },
    { id: "V-610", title: "National Clean Energy Initiative", status: "Finalized", totalVotes: 342109, integrityScore: "99.99%", date: "March 15, 2026" },
];

const VerifiedResults: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="verifiedPage">
                <header className="verifiedHeader">
                    <div className="statusBadge">🛡️ CRYPTOGRAPHICALLY SECURE</div>
                    <h1>Verified Results</h1>
                    <p>Browse official poll outcomes that have passed our 4-step integrity audit.</p>
                </header>

                <section className="statsSummary">
                    <div className="summaryCard">
                        <span className="label">Total Verified Votes</span>
                        <span className="value">1,240,592</span>
                    </div>
                    <div className="summaryCard">
                        <span className="label">Avg. Integrity Score</span>
                        <span className="value highlightGreen">99.97%</span>
                    </div>
                    <div className="summaryCard">
                        <span className="label">Audited Polls</span>
                        <span className="value">4,102</span>
                    </div>
                </section>

                <div className="resultsTableContainer">
                    <table className="resultsTable">
                        <thead>
                            <tr>
                                <th>Audit ID</th>
                                <th>Poll Title</th>
                                <th>Total Votes</th>
                                <th>Integrity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {VERIFIED_DATA.map((poll) => (
                                <tr key={poll.id}>
                                    <td className="pollId">{poll.id}</td>
                                    <td className="pollTitle">
                                        {poll.title}
                                        <span className="pollDate">{poll.date}</span>
                                    </td>
                                    <td>{poll.totalVotes.toLocaleString()}</td>
                                    <td className="integrityValue">{poll.integrityScore}</td>
                                    <td>
                                        <span className={`statusPill ${poll.status.toLowerCase()}`}>
                                            {poll.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="reportBtn">View Report</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default VerifiedResults;