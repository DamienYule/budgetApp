const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction")

transactions.get("/" ,(req,res) => {
    res.json(transactionsArray)
})
transactions.get("/:arrayIndex", (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    if (transactionsArray[arrayIndex]) {
        res.json(transactionsArray[arrayIndex])
    } else {
        res.redirect("/404")
    }
})
transactions.post("/", (req, res) => {
    if(!typeof(req.body.name) == String ){
        res.json(transactionsArray)
    }else{
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length - 1])
    }
})



module.exports = transactions