const express = require('express');

const router = express.Router(); //Para crear nuestro enroutador.
const {getAllMovies, getMovie, postNewMovies, putMovies, deleteMovies} = require('../controllers/movies.controllers');
router.get('/',  getAllMovies);                      //GET  *Las creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
router.get('/:id',  getMovie);                       // GET POR ID Para recoger en este caso películas por el id
router.post('/', postNewMovies);                     //POST
router.put('/:id', putMovies);                      //PUT Va a recibir por parámetro una id
router.delete('/:id', deleteMovies);                   //DELETE Va a recibir por parámetro una id

module.exports = router; //Para exportar el router.