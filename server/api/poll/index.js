'use strict';

var express = require('express');
var controller = require('./poll.controller');
var choiceController = require('./choice/choice.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();
var choiceRouter = express.Router({mergeParams: true});

router.use('/:id/choices', choiceRouter);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

choiceRouter.put('/', auth.isAuthenticated(), choiceController.update);
choiceRouter.post('/:choice_id', auth.isAuthenticated(), choiceController.vote);


module.exports = router;