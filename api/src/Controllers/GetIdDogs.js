const getDogs = require("./GetDogs");
const {Raza}=require("../bd");
const {Temperamento} = require("../bd");
const { default: axios } = require("axios");
const {DB_API_KEY}=process.env;

const getIdDogs=async(id)=>{
    if(isNaN(id)){
    // Buscamos en la base de datos
    const dogBd=await Raza.findByPk(id,{
        include:[{
            model:Temperamento,
            through:{
                attributes:[]
            }
        }]
    })
    if(dogBd){
        return dogBd;
    }else{
        throw new Error("No se encontrado dog con ese Id")
    }
}

    const data=(await (axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`))).data
    const dog=data.find(e=>e.id===Number(id))
    if(dog){
        const{id,name,temperament,height,weight,life_span,image}=dog
        const temperaments=[];
        temperament.split(", ").forEach(e =>temperaments.push({name:e}));
        return{
            id:id,
            name:name,
            height_metric_min:Number(height.metric.split(" ")[0]),
            heigth_metric_max:Number(height.metric.split(" ")[2]),
            weight_metric_min:Number(weight.metric.split(" ")[0]),
            weight_metric_max:Number(weight.metric.split(" ")[2]),
            life_span_years_min:Number(life_span.split(" ")[0]),
            life_span_years_max:life_span.split(" ").length===2? "...":Number(life_span.split(" ")[2]),
            image:image.url,
            Temperamentos:temperaments,
        }
    }else{
    throw new Error("No se ha encontrado dog con ese Id")
}    
}

module.exports=getIdDogs;