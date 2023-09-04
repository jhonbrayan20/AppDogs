
const server=require("./app");
const { conn } = require("./bd");
const dotenv=require("dotenv")
dotenv.config()

const {PORT}=process.env;




conn.sync({force:false}).then(()=>{
    server.listen(PORT,()=>{
    console.log(`Estamos en el servidor ${PORT}`)
    })
})

