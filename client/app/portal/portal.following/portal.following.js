'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('portal.following', {
        url: '/following',
        templateUrl: 'app/portal/portal.following/portal.following.html',
        controller: 'PortalFollowingCtrl',
        controllerAs: 'ctrl',
        authenicate: true,
        resolve: {
          usersObj: [
            'User',
            function(User){
              return User.following().$promise;
            }
          ]
        }
      });
  }]);