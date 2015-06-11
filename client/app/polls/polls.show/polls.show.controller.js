'use strict';

angular.module('workspaceApp')
  .controller('PollsShowCtrl', [ 'pollObj', function (pollObj) {
    var ctrl = this;
    ctrl.poll = pollObj;
  }]);
