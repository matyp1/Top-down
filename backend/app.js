const express = require("express");
const bodyParser = require("body-parser");
const pollRoutes = require("./routes/pollRoutes");
const responseRoutes = require("./routes/responseRoutes");
const factionRoutes = require("./routes/factionRoutes");

// The Convergence Gateway routes all faction communications here.
const app = express();
app.use(bodyParser.json());

app.use("/polls", pollRoutes);
app.use("/responses", responseRoutes);
app.use("/factions", factionRoutes);

app.get("/status", (_req, res) => {
  res.json({
    status: "Faction Flow Society Engine humming",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
