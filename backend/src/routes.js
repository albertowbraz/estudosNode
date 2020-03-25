const express = require('express');

const OngCotrollers = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngCotrollers.index);
routes.post('/ongs',OngCotrollers.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);


routes.post('/incidents')
module.exports = routes;