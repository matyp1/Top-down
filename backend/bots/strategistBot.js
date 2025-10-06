// strategistBot: Keeper of the tactical playbook, simulating faction counter-moves.
// Future upgrade: integrate with reinforcement learning war games.
module.exports = function strategistBot(summary = {}) {
  const factions = Object.keys(summary);
  return {
    name: "Strategist Oracle",
    calculatedEquilibrium: factions.length / 10,
    riskAlerts: factions.filter((key) => (summary[key]?.participation || 0) < 0.5),
    notes: "Calculating the quiet before each maneuver.",
  };
};
