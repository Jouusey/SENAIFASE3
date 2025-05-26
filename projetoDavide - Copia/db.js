require('dotenv').config()
const { Pool } = require('pg');

async function connect(){

    const pool = new Pool({

        port: process.env.PORT_NUMBER,
        host: process.env.HOST,
        user: process.env.USER_NAME,
        database: process.env.DB_NAME,
        password: process.env.PW,
        
    
    })
/* 
    const result = await pool.query('SELECT NOW()')
    console.log(result.rows)
    console.log('Rodando') */
    const client= await pool.connect()
    client.release()
    return pool.connect()

}

connect()

//?-----------função para inserir clientes------------------?//

async function insertCustomer(customer) {
    //conexão com o banco
    const client = await connect()

    //consulta sql
    const sql = "INSERT INTO clientes (cpf, nome, email, idade, profissao) VALUES ($1, $2, $3, $4, $5)";

    
    //acessando valores que vão ser inseridos
    const values = [customer.cpf, customer.nome, customer.email, customer.idade, customer.profissao];

   
    //enviar dados para o banco

    await client.query(sql, values);
}

async function selectCustomer(customer) {
    const client = await connect()

    const sql = "SELECT * FROM clientes"
    const result = await client.query(sql);
    return result.rows;

    
}

async function deleteCustomer(){
    const client = await connect()

    const sql = "DELETE FROM clientes"
    const result = await client.query(sql);
}

module.exports = {
    insertCustomer,
    selectCustomer,
    deleteCustomer
};