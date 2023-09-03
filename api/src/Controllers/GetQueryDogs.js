const axios=require("axios");
const {Raza,Temperamento}=require("../bd");
const {Op}=require("sequelize");
const {DB_API_KEY}=process.env;



const getQueryDogs=async(name)=>{
    const data=(await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`)).data
    
    const regex=new RegExp(name.toLowerCase())

    const filterDog=data.filter(e=>regex.test(`${e.name.toLowerCase()}`));
    // console.log(filterDog)
   
        const queryDogs=filterDog.map(e=>{
            const{id,name,height,weight,life_span,temperament,image}=e;
            const temperaments=[];
            if(temperament){
                temperament.split(", ").map(e=>temperaments.push({name:e}))
            }
            return{
                id:id,
                name:name,
                height_metric_min:Number(height.metric.split(" ")[0]),
                heigth_metric_max:Number(height.metric.split(" ")[2]),
                weight_metric_min:Number(weight.metric.split(" ")[0]),
                weight_metric_max:Number(weight.metric.split(" ")[2]),
                life_span_years_min:Number(life_span.split(" ")[0]),
                life_span_years_max:Number(life_span.split(" ")[2]),
                Temperamentos:temperaments,
                image:image.url,
            }
        })
    
    
    
    const queryNameBd=await Raza.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`            
            }
        } ,
        include:[{
            model:Temperamento,
            through:{
                attributes:[]
            }
        }]
    })

    const queryAllDogs=[...queryDogs,...queryNameBd]

     if(queryAllDogs.length===0){

         throw new Error("No se encontraron Dogs con ese nombre")
     }
    
    return queryAllDogs;
}
    
    
    

    
   

module.exports=getQueryDogs;