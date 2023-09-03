const { default: axios } = require("axios");
const {Temperamento} = require("../bd")
const {DB_API_KEY}=process.env;



const getTemperaments=async()=>{
    const TemperamentsBd=await Temperamento.findAll() 

    if(TemperamentsBd.length>0){
        return TemperamentsBd.map(e=>e.name)
    }

        const dogsApi=(await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`)).data;
        let temperamentsRepit=[];
        dogsApi.forEach(e => {
            if(e.temperament){
                temperamentsRepit.push(...e.temperament.split(", "))
            }})
        
        const temperamentsSed=new Set(temperamentsRepit);
        const Temperaments=[...temperamentsSed]
        try {
            for (const e of Temperaments) {
                await Temperamento.create({name:e})
            }
        } catch (error) {
            throw new Error("No se pudo crear Temperamentos")
        }
        return Temperaments;
}

module.exports=getTemperaments;