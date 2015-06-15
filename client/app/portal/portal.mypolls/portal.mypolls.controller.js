'use strict';

angular.module('workspaceApp')
  .controller('PortalMypollsCtrl', [ 'pollsObj', function (pollsObj) {
    var ctrl = this;
    ctrl.polls = pollsObj;
  }]);
