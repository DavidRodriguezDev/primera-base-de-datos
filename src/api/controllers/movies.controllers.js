const Movie = require('../models/movies.models'); //Nos traemos las movies del archivo movies.models


const getAllMovies = async (request, response) => {
    try {
        
        const allMovies = await Movie.find();  //Coger todas las películas de nuestro modelo "Movie".
        return response.status(200).json(allMovies); //Devuelve con el status 200 (ok) todas las Movies.

    } catch (error) {
        
        return response.status(500).json(error);
    }
    
}

const getMovie = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allMovies = await Movie.findById(id);  //Coger todas las películas de nuestro modelo "Movie".
        return response.status(200).json(allMovies); //Devuelve con el status 200 (ok) todas las Movies.

    } catch (error) {
        
        return response.status(500).json(error);
    }
    
}

const postNewMovies = async (request, response) => {
    try {
        
        const {title, director, year} = request.body;
        const newMovie = new Movie({title, director, year});
        const createdMovie = await newMovie.save();
        return response.status(201).json(createdMovie);

    } catch (error) {
        return response.status(500).json(error);
    }
}

const putMovies = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params la id.
        const putMovie = new Movie(request.body);
        putMovie._id = id;

        const movieDb = await Movie.findByIdAndUpdate(id, putMovie);  
        if(!movieDb) { //Para controlar el error, Si no encuentra ninguno en la base de datos
            return response.status(404).json({message : "Movie not found on database"});
        }
        return response.status(200).json(putMovie) // Si no, se devuelve el elemento actualizado.


    } catch (error) {
        
        return response.status(500).json(error);

    }
}

const deleteMovies = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params la id.
        const movieDb = await Movie.findByIdAndDelete(id);

        if(!movieDb) { //Para controlar el error, Si no encuentra ninguno en la base de datos
            return response.status(404).json({message : "Movie not found on database"});
        }
        return response.status(200).json(movieDb) // Si no, se devuelve el elemento actualizado.

    } catch (error) {
        
        return response.status(500).json(error);
        
    }
}

module.exports = {getAllMovies, getMovie, postNewMovies, putMovies, deleteMovies};  //Exportamos todas las funciones que hemos creado por separado para tener más organizado el proyecto al movies.router.