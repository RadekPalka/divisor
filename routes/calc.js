const express = require("express");
const calcRouter= express.Router();
let result= "Nie wypełniono formularza";
calcRouter
    .post("/check", (req, res) =>{
    const {resMessage}= req.body
    result = resMessage

})
    .get("/check", (req, res)=>{
    res.send(result)
})

module.exports = {
    calcRouter
}