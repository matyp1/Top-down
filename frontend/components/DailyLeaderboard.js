import React from "react";

// DailyLeaderboard: Displays the grand procession of factions ascending the rankings.
// Whispered tales say the top faction receives extra resonance in the Nexus.
const DailyLeaderboard = ({ standings = [] }) => {
  return (
    <div className="faction-card strategist-shine">
      <h3 className="faction-title">Daily Faction Procession</h3>
      <ol className="leaderboard-list">
        {standings.length === 0 && <li>No factions reported today. The arena waits.</li>}
        {standings.map((entry, index) => (
          <li key={entry.name || index} className="leaderboard-entry">
            <span className="rank">#{index + 1}</span>
            <span className="name">{entry.name}</span>
            <span className="score">{entry.score}</span>
            <span className="badge">{entry.badge || "🛡️"}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DailyLeaderboard;
