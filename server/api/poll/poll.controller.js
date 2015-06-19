'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');
var User = require('../user/user.model.js');

// Get list of polls
exports.index = function(req, res) {
  var query = {};
  (req.query.user_id) ? (query.user_id = req.query.user_id) : "";
  Poll.find(query, function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.json(200, polls);
  });
};

// Get list of polls from Users user follows
exports.feed = function(req, res){
  var userId = req.user._id;
  User.findById(userId, 'following', function(err, user){
    if(err) { return handleError(res, err); }
    var feed = user.following;
    feed.push(userId);
    Poll.find({
      "user_id": {
        "$in": feed
      }
    }, function(err, polls){
      if(err) { return handleError(res, err); }
      res.send(200, polls);
    })
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.send(404); }
    return res.json(poll);
  });
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  req.body.user_id = req.user._id;
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.json(201, poll);
  });
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.send(404); }
    var updated = _.merge(poll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findOne(
    { "_id": req.params.id, "user_id": req.user._id }, 
      function (err, poll) {
        if(err) { return handleError(res, err); }
        if(!poll) { return res.send(404); }
        poll.remove(function(err) {
          if(err) { return handleError(res, err); }
        return res.send(204);
      });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}