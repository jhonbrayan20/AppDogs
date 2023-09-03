
const server=require("./src/app");
const { conn } = require("./src/bd");
const PORT=3001;




conn.sync({force:false}).then(()=>{
    server.listen(PORT,()=>{
    console.log(`Estamos en el servidor ${PORT}`)
    })
})

