const postDogs=require("../Controllers/PostsDogs")

const postDogsHanderls=async(req,res)=>{
    try {
        
        const dogs= await postDogs(req.body)
        res.status(200).json(dogs)
        
        // res.status(200).send("Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body, Crea una raza de perro en la base de datos relacionada con sus temperamentos")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports=postDogsHanderls;