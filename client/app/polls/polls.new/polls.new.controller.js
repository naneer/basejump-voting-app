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
    
    var filterChoices = function(choices){
      return choices.filter(function(choice){
        return choice !== '';
      });
    };
    
    ctrl.addChoice = function(){
      ctrl.poll.choices = filterChoices(ctrl.poll.choices);
      ctrl.poll.choices.push('');
    };
    ctrl.submitPoll = function(){
      ctrl.poll.choices = filterChoices(ctrl.poll.choices);
      console.log(ctrl.poll);
    };
  }]);