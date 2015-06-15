'use strict';

angular.module('workspaceApp')
  .controller('PortalFeedsCtrl', ['pollsObj', function (pollsObj) {
    var ctrl = this;
    ctrl.polls = pollsObj;
  }]);
