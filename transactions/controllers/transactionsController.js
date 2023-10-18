const express = require("express");
const transactions = express.Router();
const transactionsData = require('../models/transaction');

transactions.get("/", (req, res) => {
  console.log("all transactions")
  res.json(transactionsData);
})

transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log("SHOWWWWWW ROUTEEEE")
  if (transactionsData[index]) {
    res.status(200).json(transactionsData[index])
  } else {
    res.status(404).send("No transactions at this index");
  }
})

transactions.post("/", (req, res) => {
  console.log("post route was hit !@!@!");
  console.log(req.body, "<----- sent from user");
  transactionsData.push(req.body);
  res.status(200).json({ status: "OK", payload: transactionsData[transactionsData.length - 1] })
})

module.exports = transactions;