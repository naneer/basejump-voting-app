'use strict';

var express = require('express');
var controller = require('./user.controller');
var followsController = require('./follows/follows.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();
var followsRouter = express.Router({ mergeParams: true });

router.use('/follows', followsRouter);

router.get('/', auth.hasRole('user'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

followsRouter.get('/', auth.isAuthenticated(), followsController.following);
followsRouter.post('/:id', auth.isAuthenticated(), followsController.follow);
followsRouter.delete('/:id', auth.isAuthenticated(), followsController.unfollow);

module.exports = router;
