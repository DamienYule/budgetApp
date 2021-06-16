const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.use((req, res, next)=>{
  console.log(`${req.method} request made at ${req.url}`)
  next();
})

app.get("/", (req, res) => {
  res.send("Budget App");
});

const transactionsController = require("./controllers/transactionsController")
app.use("/transactions", transactionsController)

app.get("*", (req,res)=>{
  res.status(404).send("Page not found");
})

module.exports = app;
