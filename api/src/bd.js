const {Sequelize}=require("sequelize");
const dotenv=require("dotenv");
const raza=require("./Models/Raza")
const temperamento=require("./Models/Temperamento")
dotenv.config()


const{DB_NAME,DB_HOST,DB_PASSWORD,DB_USER,DB_PORT}=process.env





const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging:false
})

sequelize.authenticate()
.then(()=>console.log('Connection has been established successfully.'))
.catch(error=>console.error('Unable to connect to the database:', error))

raza(sequelize);
temperamento(sequelize);


const{Raza,Temperamento}=sequelize.models

// Establecemos la coneccion de los modelos 

// Una raza de perro puede tener varios "temperamentos"
Raza.belongsToMany(Temperamento,{through:"RazaTemperamento"})
Temperamento.belongsToMany(Raza,{through:"TemperamentoRaza"})

// un "temperamento" puede corresponder a múltiples razas de perro distintas


  module.exports={
    ...sequelize.models,
    conn:sequelize
  }
