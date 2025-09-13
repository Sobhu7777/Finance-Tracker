const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('./routes/AuthRoutes'); // Correctly imported AuthRoutes
const transactionRoutes = require("./routes/TransactionRoutes");
const connectDB = require("./config/db");
const { protect } = require('./middleware/AuthMiddleware');


const port = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Correctly mounted AuthRoutes
app.use("/api/transactions", protect, transactionRoutes); // Correctly mounted TransactionRoutes with protection

// Connect DB & start server
connectDB()
  .then(() => app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
}))
  .catch(err => console.error(err));
