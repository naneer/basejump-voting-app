'use strict';

var _ = require('lodash');
var Poll = require('../poll.model');


// Vote on Choice
exports.vote = function(req, res){
  Poll.findOneAndUpdate(
      { "_id": req.params.id, "choices._id": req.params.choice_id },
      { 
          "$inc": {
              "choices.$.value": 1
          }
      },
      { new: true },
      function(err, poll){
        if(err) { return handleError(res, err); }
        return res.json(201, poll);   
      }
  );  
};

exports.update = function(req, res){
  Poll.findByIdAndUpdate(req.params.id, 
    {
      "$push": {
        "choices": {
          "label": req.body.label,
          "color": "#cccccc",
          "highlight": "#cccccc",
          "value": 1
        }
      }
    },
    { new: true },
    function(err, poll){
      if(err) { return handleError(res, err); }
      return res.json(201, poll)
    }
  );
};

function handleError(res, err) {
  return res.send(500, err);
}