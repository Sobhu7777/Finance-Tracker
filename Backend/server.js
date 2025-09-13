const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const transactionRoutes = require("./routes/TransactionRoutes");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

// Connect DB & start server
connectDB()
  .then(() => app.listen(5000, () => console.log(`Server running on port ${port}`)))
  .catch(err => console.error(err));
