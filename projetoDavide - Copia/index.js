require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();


const port = process.env.PORT

app.use(express.json());

app.post("/clientes", async (req, res) => {

        await db.insertCustomer(req.body)
        
        res.status(201).json({ message: "Cliente inserido com sucesso" });
      
})

app.get("/clientes", async (req, res) =>{


        const customers = await db.selectCustomer();
        
        res.status(200).json(customers);



})

app.delete("/clientes", async (req, res) =>{


    await db.deleteCustomer();
    
    res.status(404).json(customers);



})


      

app.listen(port, () => {
    console.log("Rodando na porta: ", port)
})