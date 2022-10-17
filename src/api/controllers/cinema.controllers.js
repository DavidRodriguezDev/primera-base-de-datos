const Cinema = require('../models/cinema.models');

const getAllCinema = async (request, response) => {
    try {
        
        const cinemas = await Cinema.find().populate("movies");
        return response.status(200).json(cinemas); //Devuelve con el status 200 (ok) todas las Movies.

    } catch (error) {
        return response.status(200).json(error);
    }
}

const getCinema = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allCinemas = await Cinema.findById(id);  //Coger todas las películas de nuestro modelo "Movie".
        return response.status(200).json(allCinemas); //Devuelve con el status 200 (ok) todas las Movies.

    } catch (error) {
        return response.status(200).json(error);
    }
}

const postNewCinema = async (request, response) => {
    try {
        
        const {name, location, movies} = request.body;
        const newCinema = new Cinema({name, location, movies});
        const createdCinema = await newCinema.save();
        return response.status(201).json(createdCinema);

    } catch (error) {
        return response.status(500).json(error);
    }
}

const putCinema = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params la id.
        const putCinema = new Cinema(request.body);
        putCinema._id = id;

        const cinemaDb = await Cinema.findByIdAndUpdate(id, putCinema);  
        if(!cinemaDb) { //Para controlar el error, Si no encuentra ninguno en la base de datos
            return response.status(404).json({message : "Movie not found on database"});
        }
        return response.status(200).json(putCinema) // Si no, se devuelve el elemento actualizado.


    } catch (error) {
        
        return response.status(500).json(error);

    }
}

const deleteCinema = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params la id.
        const cinemaDb = await Cinema.findByIdAndDelete(id);

        if(!cinemaDb) { //Para controlar el error, Si no encuentra ninguno en la base de datos
            return response.status(404).json({message : "Cinema not found on database"});
        }
        return response.status(200).json(cinemaDb) // Si no, se devuelve el elemento actualizado.

    } catch (error) {
        
        return response.status(500).json(error);
        
    }
}

module.exports = {getAllCinema, getCinema, postNewCinema, putCinema, deleteCinema};  //Exportamos todas las funciones que hemos creado por separado para tener más organizado el proyecto al movies.router.