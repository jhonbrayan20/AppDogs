const axios=require("axios");
const DB_API_KEY=process.env;

const getDogsName=async()=>{ 
    const data=(await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`)).data
   
    if(data.length>0){
        
        const namesRazas=[];
        data.forEach(e=>{
            const{name}=e
            namesRazas.push(name)
        })
        return namesRazas;

    }else{
        throw new Error("upps algo salio mal con la Api")
    }

}
module.exports=getDogsName;