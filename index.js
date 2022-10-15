const express = require('express'); //Requerimos express
const dotenv = require('dotenv'); //Requerimos dotenv

const {connect} = require('./src/utils/database');
const moviesRouter = require('./src/api/routes/movies.routes');
const PORT = process.env.PORT || 9000;
dotenv.config(); //Genera automáticamente un objeto process.env al que acceder a sus variables.

const app = express(); //Iniciamos el servidor con express.
connect(); //Conectamos después de iniciar el servidor con la BBDD.


app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({extended: false})); 

app.use('/movies', moviesRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));

