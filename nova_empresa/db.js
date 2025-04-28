async function connect(){
    const { Pool } = require("pg")


    if(global.connection)
        return global.connection.connect()

    const pool = new Pool({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        port: process.env.PORT_NUMBER
    })


    const client = await pool.connect()


    const resdb = await client.query("SELECT now()")
    console.log(resdb.rows[0])
    client.release()


    global.connection = pool

    return pool.connect()

}

connect()