'use strict';

angular.module('workspaceApp')
  .controller('PollsShowCtrl', [ 'pollObj', 'currentUser', function (pollObj, currentUser) {
    var ctrl = this;
    ctrl.poll = pollObj;
    ctrl.currentUserID = currentUser._id;
  }]);
