const express = require("express");
const transactions = require('./transactions/controllers/transactionsController');

const app = express();
const cors = require("cors")
app.use(cors());

app.use(express.json());
app.use("/transaction", transactions);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("*", (req, res) => {
  res.status(404).json({error: "no page found"})
})

app.listen(8080);

module.exports = app;