import React from "react";
import "../styles/PollTemplate.css";

const CATEGORIES = ["All", "Government", "Social", "Corporate", "Education"];

const TEMPLATE_DATA = [
  {
    id: 1,
    title: "Community Initiative",
    type: "Social",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    votes: "2.4k Uses"
  },
  {
    id: 2,
    title: "Product Roadmap",
    type: "Corporate",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    votes: "1.1k Uses"
  },
  {
    id: 3,
    title: "Public Policy Debate",
    type: "Government",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
    votes: "5.8k Uses"
  }
];

const PollTemplates: React.FC = () => {
  return (
    <section className="templateContainer">
      <div className="templateHeader">
        <h2>Launch a poll in seconds.</h2>
        <p>Pick a pre-configured template and start gathering opinions instantly.</p>
      </div>

      <div className="templateControls">
        <div className="searchWrapper">
          <input type="text" placeholder="Search templates (e.g. 'Referendum')..." />
        </div>
        <div className="filterList">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} className={`filterBtn ${i === 0 ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="templateGrid">
        {TEMPLATE_DATA.map((item) => (
          <div key={item.id} className="templateCard">
            <div className="imageWrapper">
              <img src={item.image} alt={item.title} />
              <div className="cardOverlay">
                <button className="useTemplateBtn">Use This Template</button>
                <button className="previewTemplateBtn">Live Preview</button>
              </div>
            </div>
            <div className="cardFooter">
              <div>
                <h3>{item.title}</h3>
                <span className="typeTag">{item.type}</span>
              </div>
              <span className="useCount">{item.votes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PollTemplates;