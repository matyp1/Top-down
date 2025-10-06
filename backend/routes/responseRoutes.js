const express = require("express");

// Response routes: gather whispers from citizens as they commit to choices.
const router = express.Router();

router.post("/submit", (req, res) => {
  const { user_id, poll_id, answer_json } = req.body;

  // TODO: Store the response in the Supabase scrolls.
  res.status(201).json({
    message: "Response etched into the communal ledger.",
    response: {
      id: Date.now(),
      user_id,
      poll_id,
      answer_json,
      created_at: new Date().toISOString(),
    },
  });
});

module.exports = router;
