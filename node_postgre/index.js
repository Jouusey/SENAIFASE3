require("dotenv").config()

const db = require("./db")
const port = process.env.PORT
const express = require("express")
const app = express()

app.get("/", (req,res)=>{

    res.json({
        message:"Funcionando!"
    }) 
})  

app.listen(port)

console.log("Rodando.")