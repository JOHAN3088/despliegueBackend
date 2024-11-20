
const express = require ("express");
const dbconect = require("./config");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors({origin:'*'}));
app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/empleados',require('./routes/empleado.routes'))
app.listen(3005,()=>{
console.log("el servidor esta en el puerto 3005")
});  
dbconect();


