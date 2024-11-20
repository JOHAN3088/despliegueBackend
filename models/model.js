const mongoose=require("mongoose");
const userModel= new mongoose.Schema(
    {
    documento:{
        type:Number
    },
    EPS:{
        type:String
    },
    nombreUsuario:{
        type:String
    }
},
    {
        timestamps: true,
        versionKey:false,
    }
);
const ModelUser = mongoose.model('modUsuarios',userModel);
module.exports = ModelUser;
