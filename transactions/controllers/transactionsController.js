const express = require("express");
const transactions = express.Router();
const transactionsData = require('../models/transaction');

transactions.get("/", (req, res) => {
  res.json(transactionsData);
})

transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsData[index]) {
    res.status(200).json(transactionsData[index])
  } else {
    res.status(404).send("No transactions at this index");
  }
})

transactions.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.status(200).json({ status: "OK", payload: transactionsData[transactionsData.length - 1] })
})

transactions.delete("/:arrayIndex", (req,res) => {
    const { arrayIndex } = req.params
    if (transactionsData[arrayIndex]){
        const deletedTransaction = transactionsData.splice(arrayIndex, 1)
        res.status(200).json(deletedTransaction[0])
    } else { 
        res.status(404).json({error: "Could not find transaction to delete!"})
    }
})

  transactions.put(":/arrayIndex", (req,res) => {
      const { arrayIndex } = req.params
      if (transactionsData[arrayIndex]){
          transactionsData[arrayIndex] = req.body
          res.status(200).json((transactionsData[arrayIndex]))
      } else {
          res.status(400).json({error: "Could not find transaction to be updated!"})
      }
  })


module.exports = transactions;