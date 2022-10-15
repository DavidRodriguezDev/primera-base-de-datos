//Conectar nuestra BBDD

const mongoose = require('mongoose');
const dotenv = require('dotenv'); //Requerimos dotenv
dotenv.config();

const DB_URL = process.env.DB_URL; //Esto va a ser igual a la url que pongamos que está en el archivo .env para securizar nuestra app.

const connect = async () => {
    try {
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const{name, host} = DB.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connect} //La exportamos como objeto porque en algún momento nos llevaremos la url.