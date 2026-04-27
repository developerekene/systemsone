import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/CreatePoll.css";


const CreatePoll: React.FC = () => {
    // Basic Form State
    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Technology");
    const [visibility, setVisibility] = useState("Public");
    const [tags, setTags] = useState("");
    const [endDate, setEndDate] = useState("");
    
    // Options State (Structured to match VoteOption interface)
    const [options, setOptions] = useState([
        { id: "1", text: "", count: 0 },
        { id: "2", text: "", count: 0 }
    ]);

    const addOption = () => {
        const newId = (options.length + 1).toString();
        setOptions([...options, { id: newId, text: "", count: 0 }]);
    };

    const handleOptionChange = (index: number, value: string) => {
        const updatedOptions = [...options];
        updatedOptions[index].text = value;
        setOptions(updatedOptions);
    };

    const removeOption = (index: number) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    return (
        <>
            <Navbar />
            <div className="createPollPage">
                <div className="createContainer">
                    <header className="createHeader">
                        <span className="stepIndicator">Step 1 of 3: Configuration</span>
                        <h1>Launch a New <span className="orangeText">Poll</span></h1>
                        <p>Define your question, set your rules, and anchor your decision to the system ledger.</p>
                    </header>

                    <div className="createGrid">
                        {/* Left Column: Form Fields */}
                        <div className="formSection">
                            <div className="inputBlock">
                                <label>Poll Question</label>
                                <textarea
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="e.g., Should we implement a 4-day work week?"
                                    rows={2}
                                />
                            </div>

                            <div className="inputBlock">
                                <label>Description & Context</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Provide the background info and research for this proposal..."
                                    rows={4}
                                />
                            </div>

                            <div className="inputBlock">
                                <label>Voting Options</label>
                                <div className="optionsList">
                                    {options.map((opt, index) => (
                                        <div key={index} className="optionInputRow">
                                            <input
                                                type="text"
                                                value={opt.text}
                                                onChange={(e) => handleOptionChange(index, e.target.value)}
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

                            <div className="inputBlock">
                                <label>Tags (Comma separated)</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Economy, AI, Future" 
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Right Column: Settings & Meta */}
                        <div className="settingsSection">
                            <div className="settingsCard">
                                <h3>Poll Settings</h3>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">Category</span>
                                        <p className="settingDesc">Group your poll for discovery</p>
                                    </div>
                                    <select 
                                        className="selectInput"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>Technology</option>
                                        <option>Politics</option>
                                        <option>Economics</option>
                                        <option>Environment</option>
                                        <option>Society</option>
                                        <option>Infrastructure</option>
                                    </select>
                                </div>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">End Date</span>
                                        <p className="settingDesc">When voting concludes</p>
                                    </div>
                                    <input 
                                        type="date" 
                                        className="dateInput" 
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>

                                <div className="settingRow">
                                    <div>
                                        <span className="settingTitle">Visibility</span>
                                        <p className="settingDesc">{visibility} (Who can see this?)</p>
                                    </div>
                                    <select 
                                        className="selectInput"
                                        value={visibility}
                                        onChange={(e) => setVisibility(e.target.value)}
                                    >
                                        <option>Public</option>
                                        <option>Private</option>
                                        <option>Restricted</option>
                                    </select>
                                </div>
                            </div>

                            <div className="launchBox">
                                <button className="launchBtn">
                                    Generate Integrity Hash & Launch
                                    <span>Verified by SystemsOne Ledger</span>
                                </button>
                                <p className="launchNotice">
                                    Your poll will be assigned a SHA-256 identifier upon launch.
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