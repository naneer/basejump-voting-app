'use strict';

angular.module('workspaceApp')
  .controller('PollsNewCtrl', [function () {
    var ctrl = this;
    ctrl.poll = {
      choices: [],
      chart_type: "pie"
    };
    
    var filterChoices = function(choices){
      return choices.filter(function(choice){
        return choice.label !== '';
      });
    };
    
    ctrl.addChoice = function(){
      ctrl.poll.choices = filterChoices(ctrl.poll.choices);
      ctrl.poll.choices.push({'label': ''});
    };
    ctrl.submitPoll = function(){
      ctrl.poll.choices = filterChoices(ctrl.poll.choices);
      console.log(ctrl.poll);
    };
  }]);
