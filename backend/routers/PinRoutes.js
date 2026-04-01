const Router = require('express').Router();
const { CheckPin } = require('../controllers/PinControllers');

Router.get("/checkpin",CheckPin);

module.exports = Router;    