const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();

/* ======================
   🔥 MIDDLEWARES
====================== */

// Allow all origins (for now)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/* ======================
   🔥 ROUTES
====================== */

// Health Check Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

/* ======================
   🔥 ERROR HANDLER
====================== */

app.use((err, req, res, next) => {
  console.error(err); // log for debugging

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

/* ======================
   🔥 SERVER START
====================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});