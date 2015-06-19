'use strict';

var _ = require('lodash');
var User = require('../user.model');

/**
 * Users this user follows
 */
exports.following = function(req, res, next){
  var userId = req.user._id;
  User.findById(userId, function(err, user){
    if(err) { return next(err); }
    User.find({
      "_id": {
        "$in": user.following
      }
    }, 'name',
    function(err, users){
      if(err) { return next(err); }
      res.send(200, users);
    });
  });
};

/**
 * Follow User
 */
exports.follow = function(req, res, next){
  var userId = req.user._id;
  User.findByIdAndUpdate(userId,
    {
      "$addToSet": {
        "following":  req.params.id
      }
    },
    { new: true },
    function(err, user){
      if(err) { return next(err); }
      return res.send(200, user);
  });
};

/**
 * Unfollow User
 */
 exports.unfollow = function(req, res, next){
  var userId = req.user._id;
  User.findByIdAndUpdate(userId, 
    {
      "$pull": {
        "following": req.params.id
      }
    },
    function(err, user){
    if(err) { return next(err); }
    return res.send(201);
  });
 };
 
