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

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/materias',materiaRoute);
app.use('/api/v1/status',statusRoute);
app.use('/api/v1/alumnos',alumnosRoute);
app.use('/api/v1/alumnosenclases',alumnosenclasesRoute);
app.use('/api/v1/clases',clasesRoute);
app.use('/api/v1/clasesenperiodos',clasesenperiodosRoute);
app.use('/api/v1/horarios',horariosRoute);
app.use('/api/v1/maestros',maestrosRoute);
app.use('/api/v1/periodos',periodosRoute);
app.use('/api/v1/usuarios',usuariosRoute);
app.use('/api/v1/login',loginRoute);

module.exports = app;