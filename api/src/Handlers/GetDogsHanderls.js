const getDogs=require("../Controllers/GetDogs");
const getIdDogs = require("../Controllers/GetIdDogs");
const getQueryDogs = require("../Controllers/GetQueryDogs");
const getDogsName = require("../Controllers/GetDogsName");



const getDogsHanderls= async(req,res)=>{
    const{name}=req.query;
    try {
        if(name){
            const queryDogs=await getQueryDogs(name)
            res.status(200).json(queryDogs)
        }else{
            const razas=await getDogs()
            res.status(200).json(razas)
        }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}




const getIdHanderls=async(req,res)=>{
    const{id}=req.params;
    try {
        const dogdId=await getIdDogs(id)
        res.status(200).json(dogdId)
        // res.status(200).send("Obtener el detalle de una raza de perro en particular, Debe traer solo los datos pedidos en la ruta de detalle de raza de perro Incluir los temperamentos asociados")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

const getDogsHanderlsName=async(req,res)=>{
    try {
        const dogName=await getDogsName()
        res.status(200).json(dogName)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={getDogsHanderls,getIdHanderls,getDogsHanderlsName};
