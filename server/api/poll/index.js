'use strict';

var express = require('express');
var controller = require('./poll.controller');
var choiceController = require('./choice/choice.controller');

var router = express.Router();
var choiceRouter = express.Router({mergeParams: true});

router.use('/:id/choices', choiceRouter);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

choiceRouter.post('/:choice_id', choiceController.create);

module.exports = router;