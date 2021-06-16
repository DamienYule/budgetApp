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
transactions.put("/:arrayIndex", (req, res) => {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.json(transactionsArray[req.params.arrayIndex]);
});
transactions.delete("/:indexArray", (req, res) => {
    const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
    res.json(deletedTransaction);
});
//test


module.exports = transactions