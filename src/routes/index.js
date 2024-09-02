import express from 'express';
import { opa, dados, teste } from '../controllers/index.js';

function routes(app){
	app.use('/', express.static('public'));
	app.get('/opa', opa)
	app.get('/dados', dados)
	app.get('/teste/:valor', teste)
}

export default routes;