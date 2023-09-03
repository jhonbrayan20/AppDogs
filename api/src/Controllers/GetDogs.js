const axios=require("axios");
const{Raza,Temperamento}=require("../bd");
const {DB_API_KEY}=process.env;

const getDogs=async()=>{
    const dataApi=await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`)
    const dogs=dataApi.data.map(e=>{
        const{id,name,height,weight,life_span,temperament,reference_image_id}=e
        const temperaments=[];
        if(temperament){
            temperament.split(", ").map(e=>temperaments.push({name:e}))
        }
        
              return {
            id:id,
            name:name,
            height_metric_min:Number(height.metric.split(" ")[0]),
            heigth_metric_max:Number(height.metric.split(" ")[2]),
            weight_metric_min:Number(weight.metric.split(" ")[0]),
            weight_metric_max:Number(weight.metric.split(" ")[2]),
            life_span_years_min:Number(life_span.split(" ")[0]),
            life_span_years_max:Number(life_span.split(" ")[2]),
            Temperamentos:temperaments,
            image:reference_image_id? `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg` :null
        }
    })
 
    const dataBd=await Raza.findAll({
        include:[
            {
            model:Temperamento,
            through: { attributes: [] },
        }]
    })

    const dataAll=[...dogs,...dataBd]
    return dataAll;
}

module.exports=getDogs;