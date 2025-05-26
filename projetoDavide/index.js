require('dotenv').config();
const express = require('express');
const pool = require('./db');
const { connect } = require('http2');
const app = express();

const port = process.env.PORT_NUMBER


app.use(connect)




app.get('/clientes', (req, res) =>{
    req.params;
    res.json(req.params)
}) 


console.log("Rodando o Backend!!", port)
app.listen(port)