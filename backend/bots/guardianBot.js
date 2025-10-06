// guardianBot: Defender of the Nexus, scanning for threats in faction sentiment.
// Future upgrade: link to sentiment analysis models and anomaly detection.
module.exports = function guardianBot(responses = []) {
  return {
    name: "Guardian Sentience",
    vigilanceIndex: Math.min(1, responses.length * 0.05),
    shieldIntegrity: 0.92,
    notes: "Standing watch over the communal heartwood.",
  };
};
