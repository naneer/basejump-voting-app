'use strict';

angular.module('workspaceApp')
  .controller('PollsNewCtrl', [function () {
    var ctrl = this;
    ctrl.poll = {
      choices: [],
      chart: {
        type: "pie"
      }
    };
    ctrl.addChoice = function(){
      ctrl.poll.choices.push('');
    };
    ctrl.submitPoll = function(){
      console.log(ctrl.poll);
    };
  }]);
