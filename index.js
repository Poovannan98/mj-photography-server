const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const MessageRoute = require("./routes/feedback");



// MIDDILEWARE CONFIGURATION
dotenv.config();
app.use(express.json());
app.use(cors());

// DATABASE CALL
connectDb();

// ROUTE CONFIGURATION
app.use("/api/new_message", MessageRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<centre><h1>Welcome to Feedback System for Photography website!!!</h1></centre>");
});

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log("Backend is running at port ",PORT);
});