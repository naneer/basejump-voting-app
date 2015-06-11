'use strict';

angular.module('workspaceApp')
  .controller('PollsAllCtrl', [ 'pollsObj', function (pollsObj) {
    var ctrl = this;
    ctrl.polls = pollsObj;
  }]);
