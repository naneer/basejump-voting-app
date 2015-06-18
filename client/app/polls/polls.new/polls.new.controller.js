'use strict';

angular.module('workspaceApp')
  .controller('PollsNewCtrl', [ '$state', 'Poll', function ($state, Poll) {
    var ctrl = this;
    ctrl.poll = {
      choices: [],
      chart_type: "pie"
    };
    
    var colors = [
      { color: '#F7464A', highlight: '#FF5A5E' },
      { color: '#46BFBD', highlight: '#5AD3D1' },
      { color: '#FDB45C', highlight: '#FFC870' },
      { color: '#8255BE', highlight: '#A969B7' },
      { color: '#59BD72', highlight: '#B2D642' }
    ];
    
    var filterChoices = function(choices){
      return choices.filter(function(choice){
        return choice.label !== '';
      });
    };
    
    var concatColors = function(count){
      var placeholder_colors = [];
      var value = Math.ceil(count.toString() + "e-1");
      value = Math.ceil(value.toString() + "e1") / 5;
      for(var i = 0; i < value; i++){
        placeholder_colors = placeholder_colors.concat(colors)
      }
      return placeholder_colors;
    };
    
    Array.zip = function(left, right, combinerFunction){
      var counter, results = [];
      for(counter = 0; counter < Math.min(left.length, right.length); counter++){
        results.push(combinerFunction(left[counter], right[counter]));
      }
      return results;
    };
    
    ctrl.addChoice = function(){
      ctrl.poll.choices = filterChoices(ctrl.poll.choices);
      ctrl.poll.choices.push({"label": ""});
    };
    ctrl.submitPoll = function(){
      ctrl.disableForm = true;
      ctrl.poll.choices = Array.zip(filterChoices(ctrl.poll.choices), concatColors(ctrl.poll.choices.length), function(l, r){
        return { 
          label: l.label,
          value: 0,
          color: r.color,
          highlight: r.highlight
        };
      });

      var poll = Poll.save({}, ctrl.poll, function(value, res){
        $state.go('polls.show',{id: value._id});
      }, function(err){
        console.log(err);
        ctrl.disableForm = false;
      });
      
    };
  }]);
