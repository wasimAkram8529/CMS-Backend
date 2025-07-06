const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://cms-frontend-ecru.vercel.app",
      "https://cms-frontend-woad-eight.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

const complaintRoutes = require("./routes/ComplaintRoutes");
app.use("/api", complaintRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
