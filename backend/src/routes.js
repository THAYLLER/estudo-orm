const express = require('express');

const AccountController = require('./controllers/AccountController');
const CursoController = require('./controllers/CursoController');
const DiscuplinaController = require('./controllers/DiscuplinaController');
const PagamentoController = require('./controllers/PagamentoController');
const ProfissionalController = require('./controllers/ProfissionalController');
const TurmatController = require('./controllers/TurmatController');

const routes = express.Router();
routes.get('/account/all', AccountController.index);
routes.get('/account/find/:id', AccountController.show);
routes.post('/account/new', AccountController.store);
routes.put('/account/edit/:id', AccountController.update);
routes.delete('/account/delete/:id', AccountController.destroy);

routes.get('/curso/all', CursoController.index);
routes.get('/curso/find/:id', CursoController.show);
routes.post('/curso/new', CursoController.store);
routes.put('/curso/edit/:id', CursoController.update);
routes.delete('/curso/delete/:id', CursoController.destroy);

routes.get('/disciplina/all', DiscuplinaController.index);
routes.get('/disciplina/find/:id', DiscuplinaController.show);
routes.post('/disciplina/new', DiscuplinaController.store);
routes.put('/disciplina/edit/:id', DiscuplinaController.update);
routes.delete('/disciplina/delete/:id', DiscuplinaController.destroy);

routes.get('/pagamento/all', PagamentoController.index);
routes.get('/pagamento/find/:id', PagamentoController.show);
routes.post('/pagamento/new', PagamentoController.store);
routes.put('/pagamento/edit/:id', PagamentoController.update);
routes.delete('/pagamento/delete/:id', PagamentoController.destroy);

routes.get('/profissional/all', ProfissionalController.index);
routes.get('/profissional/find/:id', ProfissionalController.show);
routes.post('/profissional/new', ProfissionalController.store);
routes.put('/profissional/edit/:id', ProfissionalController.update);
routes.delete('/profissional/delete/:id', ProfissionalController.destroy);

routes.get('/turma/all', TurmatController.index);
routes.get('/turma/find/:id', TurmatController.show);
routes.post('/turma/new', TurmatController.store);
routes.put('/turma/edit/:id', TurmatController.update);
routes.delete('/turma/delete/:id', TurmatController.destroy);

module.exports = routes;