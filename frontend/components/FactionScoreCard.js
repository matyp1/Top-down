import React from "react";

// FactionScoreCard: Chronicles the daily aura of your collective identity.
// The Archivists etch these scores into the luminous walls each dusk.
const FactionScoreCard = ({ factionName, motto, dailyScore, mood }) => {
  return (
    <div className="faction-card pioneer-flare">
      <h3 className="faction-title">{factionName || "Unnamed Faction"}</h3>
      <p className="faction-motto">{motto || "Awaiting motto from the elder council."}</p>
      <div className="faction-score">
        <span className="score-label">Daily Score:</span>
        <span className="score-value">{dailyScore ?? "--"}</span>
      </div>
      <div className="faction-mood">Mood Signal: {mood || "undetected"}</div>
    </div>
  );
};

export default FactionScoreCard;
