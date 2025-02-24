async function connect(){ //!Fucção assincrona, que permite que várias operações
//! sejam executadas simultaneamente sem bloquear a execução de outras tarefas

    
    if(global.connect)
        return global.Connection.connect()

    const  { Pool } = require("pg")
    const  pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })

    const cliente = await pool.connect()
    console.log("Foi criado o POOL de conexão")

    const res = await cliente.query("select now()") // pega a hora

    console.log(res.rows[0])
    cliente.release()

    global.connect = pool
    return pool.connect()
}  

connect();

async function selectCustumers() {
    
    const client = await connect()
    const res = await client.query("SELECT * FROM usuariod")

}

//! -Express framework
//  -Npm install
//? -PG Database
//* -DotEnv PORT CONNECTION