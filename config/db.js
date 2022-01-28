const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
require('colors');

const conectarDB =  async () =>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('BD Conectada'.bgCyan);
    }catch(error){
        console.log('Hubo un error'.bgRed);
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;