
const {Raza,Temperamento,RazaTemperamento} = require("../bd")
const getTemperaments = require("./GetTemperaments")



const postDogs=async(body)=>{
   const{name,Temperamentos}=body
   const existingTemperamentdBd= await getTemperaments()
   // console.log(existingTemperamentdBd.length)
   if(existingTemperamentdBd.length>0){
         const existingNameDb=await Raza.findOne({
           where:{
              name:name}
        })
        
        if(existingNameDb)throw new Error("Esta raza de perro ya existe")
          const raza=await Raza.create(body)
         Temperamentos.forEach(async(e) => {
            const [temperament, created] = await Temperamento.findOrCreate({
              where: { name: e },
              defaults: { name: e },
            })   
            await raza.addTemperamento(temperament, { through: RazaTemperamento });
         });
   
         return {message: "La raza de perro se ha creado correctamente" };
      }else{
         throw new Error("No hay temperamentos en la base de datos")
      }
   }


module.exports=postDogs;