

const express = require("express");
const path = require("path");

const app = express();

// Railway port
const PORT = process.env.PORT || 5000;

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// React SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server running on port " + PORT);
});