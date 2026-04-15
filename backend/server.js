// Backend placeholder server for Book Management System

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Book Management System Backend API" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Book Management System Backend API" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
