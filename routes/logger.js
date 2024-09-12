const LoggerController = require('../controllers/loggerController');
const loggerRoutes = require('express').Router();

loggerRoutes.get('/', LoggerController.getLogger);
loggerRoutes.get('/currentvalue', LoggerController.getCurrentSvAndPv);
loggerRoutes.get('/logs-by-date', LoggerController.getLogsByDate);
loggerRoutes.get('/logs-by-time', LoggerController.getLogsByTime);
loggerRoutes.get('/logs-by-date-and-time-range', LoggerController.getLogsByDateAndTimeRange);
loggerRoutes.post('/', LoggerController.add);
loggerRoutes.delete('/:id', LoggerController.deleteLogger);

module.exports = loggerRoutes;
