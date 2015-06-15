'use strict';

angular.module('workspaceApp')
  .controller('PortalFollowingCtrl', [ 'usersObj', function (usersObj) {
    var ctrl = this;
    ctrl.users = usersObj;
  }]);
