async function connect(){

    
    if(global.connect)
    return global.RTCPeerConnection.connect()

    const  { Pool } = require("pg")
    const  pool = new pool({
        connectionString:process.env.CONNECTION_STRING
    })
    const cliente = await pool.connect()
    console.log("Foi criado o POOL de conexão")

    const res = await cliente.query("select now()")
    console.log(res.rows[0])
    cliente.release()

    return pool.connect()
}  


//! -Express framework
//? -PG Database
//* -DotEnv PORT CONNECTION