const express = require("express");
const bodyParser = require('body-parser');
const app = express();
let result= "Nie wypełniono formularza"
app.use(express.static("public"))
app.use(express.json())

app.post("/calc/check", (req, res) =>{
    const {resMessage}= req.body
    result = resMessage

})
app.get("/calc/check", (req, res)=>{
    res.send(result)
})



app.listen(3000)