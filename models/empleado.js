const mongoose=require("mongoose");
const empleadoModel= new mongoose.Schema(
    {
    nombre:{
        type: String
    },
    documento:{
        type:Number
    },
    email:{
        type:String
    },
    telefono:{
        type:String
    },
    rol:{
        type:String
    }
},
    {
        timestamps: true,
        versionKey:false,
    }
);
const ModelEmpleado = mongoose.model('modEmpleados',empleadoModel);
module.exports = ModelEmpleado;
