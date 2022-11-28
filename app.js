/** 
 * This file contains the set up express and middlewares
*/
const express = require('express');
const morgan = require('morgan');

// Routes
const materiaRoute = require('./routes/materiasRoute');
const statusRoute = require('./routes/statusRoute');
const alumnosRoute = require('./routes/alumnosRoute');
const alumnosenclasesRoute = require('./routes/alumnosenclasesRoute');
const clasesRoute = require('./routes/clasesRoute');
const clasesenperiodosRoute = require('./routes/clasesenperiodosRoute');
const horariosRoute = require('./routes/horariosRoute');
const maestrosRoute = require('./routes/maestrosRoute');
const periodosRoute = require('./routes/periodosRoute');
const usuariosRoute = require('./routes/usuariosRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.json());

// http://127.0.0.1:3000/api/v1/materias/
app.use('/api/v1/materias',materiaRoute);

// http://127.0.0.1:3000/api/v1/status/
app.use('/api/v1/status',statusRoute);

// http://127.0.0.1:3000/api/v1/alumnos/
app.use('/api/v1/alumnos',alumnosRoute);

// http://127.0.0.1:3000/api/v1/alumnosenclases/
app.use('/api/v1/alumnosenclases',alumnosenclasesRoute);

// http://127.0.0.1:3000/api/v1/clases/
app.use('/api/v1/clases',clasesRoute);

// http://127.0.0.1:3000/api/v1/clasesenperiodos/
app.use('/api/v1/clasesenperiodos',clasesenperiodosRoute);

// http://127.0.0.1:3000/api/v1/horarios/
app.use('/api/v1/horarios',horariosRoute);

// http://127.0.0.1:3000/api/v1/maestros/
app.use('/api/v1/maestros',maestrosRoute);

// http://127.0.0.1:3000/api/v1/periodos/
app.use('/api/v1/periodos',periodosRoute);

// http://127.0.0.1:3000/api/v1/usuarios/
app.use('/api/v1/usuarios',usuariosRoute);

// http://127.0.0.1:3000/api/v1/login/
app.use('/api/v1/login',loginRoute);

module.exports = app;