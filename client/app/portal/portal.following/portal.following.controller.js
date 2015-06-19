'use strict';

angular.module('workspaceApp')
  .controller('PortalFollowingCtrl', [ '$state', 'usersObj', 'User', function ($state, usersObj, User) {
    var ctrl = this;
    ctrl.users = usersObj;
    ctrl.unfollow = function(follow_id){
      User.unfollow({ follow_id: follow_id }, {}, function(v, r){
        $state.reload();     
      });
    };
  }]);
