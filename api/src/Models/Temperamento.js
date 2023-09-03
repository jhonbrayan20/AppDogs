const {DataTypes}=require("sequelize");


module.exports=(sequelize)=>{
    sequelize.define("Temperamento",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
        validate:{
            validateTemp(value){
                if(value.length===0){
                    throw new Error("Al menos debe tener un temperamento");
                }
            }
        }
    }
},{
    timestamps:false,
    freezeTableName:true})

} 
