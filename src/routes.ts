import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// Rota para retornar as aulas
routes.get('/classes', classesController.index);

// Rota para criar as aulas
routes.post('/classes', classesController.create);

// Rota para retornar as connections
routes.get('/connections', connectionsController.index);

// Rota para criar as connections
routes.post('/connections', connectionsController.create);


export default routes;