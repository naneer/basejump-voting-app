/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Poll = require('../api/poll/poll.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User Now',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Poll.find({}).remove(function(){
  Poll.create({
    "question": "Favorite noodle soup?",
    "allow_other": true,
    "user_id": "557f6c88ae9dd63f137b1497",
    "chart_type": "doughnut",
    "choices": [
        {
            "label": "Ramen",
            "value": 1,
            "color":"#F7464A",
            "highlight": "#FF5A5E"
        }, {
            "label": "Pho",
            "value": 1,
            "color": "#46BFBD",
            "highlight": "#5AD3D1"
        }, {
            "label": "Boat Noodle",
            "value": 1,
            "color": "#FDB45C",
            "highlight": "#FFC870"
        }, {
            "label": "Saimin",
            "value": 1,
            "color": "#000000",
            "highlight": "#cccccc"
        }
    ]
  });
});