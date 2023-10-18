const express = require("express");
const transactions = express.Router();
const transactionsData = require('../models/transaction').default;

transactions.get("/", (req, res) => {
  console.log("all transactions")
  res.json(transactionsData);
})

module.exports = transactions;