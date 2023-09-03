const getTemperaments = require("../Controllers/GetTemperaments");

const getTemperamentsHanderls=async(req,res)=>{
    try {
        const TemperamentsDogs=await getTemperaments()
        res.status(200).json(TemperamentsDogs);
        // res.status(200).send("Obtener todos los temperamentos posibles, En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports=getTemperamentsHanderls;