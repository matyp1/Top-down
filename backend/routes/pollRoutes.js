const express = require("express");

// Poll routes: handle the forging of new daily dilemmas.
const router = express.Router();

router.post("/create", (req, res) => {
  const { question_text, options_json } = req.body;

  // TODO: Integrate with the Supabase oracle to persist polls.
  res.status(201).json({
    message: "Poll cast into the Faction Flow archives.",
    poll: {
      id: Date.now(),
      question_text,
      options_json,
      created_at: new Date().toISOString(),
    },
  });
});

module.exports = router;
