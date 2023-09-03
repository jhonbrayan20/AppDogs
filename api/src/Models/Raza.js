const{DataTypes}=require("sequelize");



module.exports=(sequelize)=>{
    sequelize.define("Raza",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false,
            validate:{
                validate(value){
                    if (!/^[A-Z][a-zA-Z\s]*$/.test(value)) {
                        throw new Error('Por favor ingrese un nombre iniciando con mayúscula')
                }
            }  
        },
        },
        height_metric_min:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        height_metric_max:{
            type:DataTypes.FLOAT,
            allowNull:true
        },
        weight_metric_min:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        weight_metric_max:{
            type:DataTypes.FLOAT,
            allowNull:true
        },
        life_span_years_min:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        life_span_years_max:{
            type:DataTypes.FLOAT,
            allowNull:true
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false,
        freezeTableName:true
    })   
} 





