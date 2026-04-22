import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/CreatePoll.css";

const CreatePoll: React.FC = () => {
    const [options, setOptions] = useState(["", ""]);

    const addOption = () => setOptions([...options, ""]);
    const removeOption = (index: number) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    return (
        <>
            <Navbar />
            <div className="createPollPage">
                <div className="createContainer">
                    <header className="createHeader">
                        <span className="stepIndicator">Step 1 of 3: Configuration</span>
                        <h1>Launch a New Poll</h1>
                        <p>Define your question, set your rules, and invite your community.</p>
                    </header>

                    <div className="createGrid">
                        {/* Left Column: Form Fields */}
                        <div className="formSection">
                            <div className="inputBlock">
                                <label>Poll Question</label>
                                <textarea
                                    placeholder="e.g., Should we implement a 4-day work week?"
                                    rows={3}
                                />
                            </div>

                            <div className="inputBlock">
                                <label>Voting Options</label>
                                <div className="optionsList">
                                    {options.map((opt, index) => (
                                        <div key={index} className="optionInputRow">
                                            <input
                                                type="text"
                                                placeholder={`Option ${index + 1}`}
                                            />
                                            {options.length > 2 && (
                                                <button
                                                    className="removeBtn"
                                                    onClick={() => removeOption(index)}
                                                >✕</button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button className="addOptionLink" onClick={addOption}>
                                    + Add another option
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Settings & Meta */}
                        <div className="settingsSection">
                            <div className="settingsCard">
                                <h3>Poll Settings</h3>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">Voting Method</span>
                                        <p className="settingDesc">Simple Majority (1 vote per person)</p>
                                    </div>
                                    <button className="changeBtn">Change</button>
                                </div>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">End Date</span>
                                        <p className="settingDesc">7 Days from now</p>
                                    </div>
                                    <input type="date" className="dateInput" />
                                </div>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">Privacy</span>
                                        <p className="settingDesc">Public (Indexed by Google)</p>
                                    </div>
                                    <div className="toggle"></div>
                                </div>
                            </div>

                            <div className="launchBox">
                                <button className="launchBtn">
                                    Launch Poll
                                    <span>Free for communities</span>
                                </button>
                                <p className="launchNotice">
                                    By launching, you agree to the SystemsOne Integrity Guidelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePoll;