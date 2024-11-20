const mongoose=require("mongoose");
require ('dotenv').config()
const dbconect=()=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGO_URL)
    .then((succes)=> console.log("conexion exitosa"))
    .catch((err)=> console.log(err.message));  
  }

  module.exports = dbconect;
  