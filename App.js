const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://spyne-iy7cp2a2b-rohans-projects-f0b6a471.vercel.app/",
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

module.exports = app;
