const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactions");

transactions.get("/", (req, res) => {
  console.log("all transactions")
  res.json(transactionsData);
})

module.exports = transactions