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

    const result = await pool.query('SELECT NOW()')
    console.log(result.rows)
    console.log('Rodando')

}

connect()