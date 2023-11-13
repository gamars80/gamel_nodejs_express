const express = require('express');
const postController = require('../controllers/post.controller');
const postsRouter = express.Router();

postsRouter.get('/', postController.getPost);

module.exports = postsRouter;