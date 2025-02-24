require("dotenv").config()

const db = require("./db")

const port = process.env.PORT

const express = require("express")
const app = express()

//!pegar dados
app.get("/", (req,res)=>{})  

//!criar rota
app.get("/usuario", (req,res)=>{

    const usuario = await db.selectCustomers()
    res.json(usuario) 
   
})  

app.listen(port)


console.log("Backend Rodando.")