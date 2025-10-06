const app = require("./app");

const PORT = process.env.PORT || 4000;

// Signal fires are lit as the server awakens.
app.listen(PORT, () => {
  console.log(`Faction Flow Society Engine listening on port ${PORT}`);
});
