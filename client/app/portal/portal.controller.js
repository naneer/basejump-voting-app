'use strict';

angular.module('workspaceApp')
  .controller('PortalCtrl', [ 'pollsObj', function (pollsObj) {
    var ctrl = this;
    ctrl.polls = pollsObj;
  }]);
