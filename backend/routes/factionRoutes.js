const express = require("express");

// Faction routes: recount the aggregated feats of each guild.
const router = express.Router();

router.get("/summary", (_req, res) => {
  // TODO: Replace with dynamic aggregation from the Supabase citadel.
  res.json({
    guardians: { participation: 0.76, mood: "optimistic" },
    pioneers: { participation: 0.62, mood: "neutral" },
    strategists: { participation: 0.81, mood: "focused" },
    harmonizers: { participation: 0.55, mood: "empathetic" },
  });
});

module.exports = router;
