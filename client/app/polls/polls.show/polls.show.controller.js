'use strict';

angular.module('workspaceApp')
  .controller('PollsShowCtrl', [ 'currentPoll', 'currentUser', 'Choice', '$state', function (currentPoll, currentUser, Choice, $state) {
    var ctrl = this;
    ctrl.poll = currentPoll;
    ctrl.currentUserID = currentUser._id;
    
    ctrl.castVote = function(){
      Choice.save({id: ctrl.poll._id, choice_id: ctrl.selection });
      $state.reload();
    };
  }]);
