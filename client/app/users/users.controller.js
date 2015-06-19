'use strict';

angular.module('workspaceApp')
  .controller('UsersCtrl', ['$state', 'usersObj', 'User', function ($state, usersObj, User) {
    var ctrl = this;
    ctrl.users = usersObj;
    ctrl.followUser = function(follow_id){
      User.follow({ follow_id: follow_id }, {}, function(v, r){
        $state.reload();     
      });
    };
  }]);
