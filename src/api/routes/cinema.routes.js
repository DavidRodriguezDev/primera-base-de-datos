const express = require('express');

const cinemaRouter = express.Router();
const {getAllCinema, getCinema, postNewCinema, putCinema, deleteCinema} = require('../controllers/cinema.controllers');

cinemaRouter.get('/',  getAllCinema);                      //GET  *Las creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
cinemaRouter.get('/:id',  getCinema);                       // GET POR ID Para recoger en este caso películas por el id
cinemaRouter.post('/', postNewCinema);                     //POST
cinemaRouter.put('/:id', putCinema);                      //PUT Va a recibir por parámetro una id
cinemaRouter.delete('/:id', deleteCinema);                   //DELETE Va a recibir por parámetro una id

module.exports = cinemaRouter; //Para exportar el router.