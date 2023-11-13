const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/user.controller');


usersRouter.get('/', usersController.getUsers);

usersRouter.get('/:userId', usersController.getUser);

usersRouter.post('/', usersController.postUser);

module.exports = usersRouter;