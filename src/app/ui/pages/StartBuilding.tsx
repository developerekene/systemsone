import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/StartBuilding.css";

const StartBuilding: React.FC = () => {
    const navigate = useNavigate();

    const categories = [
        { id: "blank", title: "Blank Canvas", desc: "Start from scratch with full control.", icon: "➕", color: "blue" },
        { id: "gov", title: "Public Policy", desc: "Templates for community and local gov.", icon: "🏛️", color: "pink" },
        { id: "corp", title: "Corporate", desc: "Internal decisions and stakeholder feedback.", icon: "💼", color: "blue" },
        { id: "social", title: "Social & Fun", desc: "Quick polls for friends or social media.", icon: "🎉", color: "orange" },
    ];

    return (
        <>
            <Navbar />
            <div className="startPage">
                <div className="startContainer">
                    <header className="startHeader">
                        <h1>What are we <span className="pinkText">deciding</span> today?</h1>
                        <p>Select a foundation to begin. Your data remains secure and encrypted.</p>
                    </header>

                    <div className="bentoGrid">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className={`bentoCard ${cat.color}`}
                                onClick={() => navigate(`/create-poll?template=${cat.id}`)}
                            >
                                <div className="cardIcon">{cat.icon}</div>
                                <div className="cardContent">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.desc}</p>
                                </div>
                                <div className="cardArrow">↗</div>
                            </div>
                        ))}
                    </div>

                    <section className="quickActions">
                        <h2>Recent Drafts</h2>
                        <div className="draftItem">
                            <div className="draftInfo">
                                <span className="draftName">Neighborhood Speed Limit Proposal</span>
                                <span className="draftDate">Last edited 2h ago</span>
                            </div>
                            <button className="resumeBtn">Resume</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default StartBuilding;