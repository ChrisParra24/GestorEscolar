/** 
 * This file contains the set up express and middlewares
*/

const express = require('express');
const morgan = require('morgan');
const materiaRoute = require('./routes/materiasRoute');
const statusRoute = require('./routes/statusRoute');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/materias',materiaRoute);
app.use('/api/v1/status',statusRoute)

module.exports = app;