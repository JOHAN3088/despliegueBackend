const ModelEmpleado=require("../models/empleado");
const empleadoCtrl={};

//CREAR EMPLEADO

empleadoCtrl.createEmploy = async (req,res)=>{
    
    const body = req.body;
    const respuesta= await ModelEmpleado.create(body);
    res.send(respuesta);
      
   };
//CONSULTAR EMPLEADO
empleadoCtrl.getEmploy = async(req,res)=>{    
    const respuesta= await ModelEmpleado.find({});
    res.send(respuesta);
    };
//CONSULTAR POR ID EMPLEADO
empleadoCtrl.getUniqueEmploy = async(req,res)=>{
    const id = req.params.id;
    const respuesta= await ModelEmpleado.findById({_id:id});   
    res.send(respuesta);
    };
//ACTUALIZAR EMPLEADO
empleadoCtrl.editEmploy = async(req,res)=>{
        const body = req.body;
        const id = req.params.id;
        const respuesta= await ModelEmpleado.findByIdAndUpdate({_id:id},body);
        res.send(respuesta); 
   
    };
//ELIMINAR EMPLEADO
empleadoCtrl.deletEmploy = async(req,res)=>{
    const id = req.params.id;
    const respuesta= await ModelEmpleado.deleteOne({_id:id});
    res.send(respuesta); 
    };

module.exports= empleadoCtrl;