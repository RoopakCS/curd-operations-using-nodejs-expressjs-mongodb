import express from "express";
import mongoose from "mongoose";
import router from "./routes/products.route.js";
import dotenv from "dotenv";

dotenv.config();

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use("api/products", router);

app.get("/", (req, res) => {
  res.send("Welcome All");
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// DB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
