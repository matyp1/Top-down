import React from "react";

// PollCard: The oracle stone that presents daily dilemmas to citizens of the Faction Flow Society.
// Legends say each choice tunes the harmonics of the digital realm.
const PollCard = ({ question, options = [], onSelect, selectedOption }) => {
  return (
    <div className="faction-card guardian-glow">
      <h2 className="faction-title">Daily Oracle</h2>
      <p className="faction-question">{question || "Awaiting prophecy from the Council..."}</p>
      <div className="faction-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`faction-option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => onSelect?.(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PollCard;
