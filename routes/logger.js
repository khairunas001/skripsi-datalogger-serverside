const LoggerController = require('../controllers/loggerController');
const loggerRoutes = require('express').Router();

loggerRoutes.get('/', LoggerController.getLogger);
loggerRoutes.post('/', LoggerController.add);
loggerRoutes.delete('/:id', LoggerController.deleteLogger);

module.exports = loggerRoutes;