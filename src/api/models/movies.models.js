const mongoose = require('mongoose'); //REQUERIMOS PRIMERO MONGOOSE

const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title: {type : String, required : true},
    director: {type : String, required : true},
    year: {type : Number}
},{
    timestamps : true  //Para saber cuando ha cambiado el elemento con la fecha de creación y fecha de actualización.
}
);

const Movie = mongoose.model('movie', moviesSchema); //Aquí creamos nuestro modelo.

module.exports = Movie; //Para exportar el modelo.