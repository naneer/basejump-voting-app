'use strict';

angular.module('workspaceApp')
  .controller('PollsShowCtrl', [ 'currentPoll', 'currentUser', 'Choice', '$state', function (currentPoll, currentUser, Choice, $state) {
    var ctrl = this;
    ctrl.poll = currentPoll;
    ctrl.currentUserID = currentUser._id;
    
    ctrl.castVote = function(){
      if(ctrl.selection === 'other'){
        Choice.put({id: ctrl.poll._id}, {label: ctrl.other}, function(v,r){
          $state.reload();
        });
        return;
      }
      Choice.save({id: ctrl.poll._id, choice_id: ctrl.selection },{},function(v,r){
         $state.reload();  
      });

    };
    
    ctrl.removePoll = function(){
      ctrl.poll.$delete({}, function(v,r){
        $state.go('portal.mypolls');
      });
    };
  }]);
