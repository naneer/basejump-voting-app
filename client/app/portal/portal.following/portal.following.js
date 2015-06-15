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
            '$resource',
            function($resource){
              var Users = $resource('https://private-b9196-pubop.apiary-mock.com/api/me/follows');
              return Users.query().$promise;
            }
          ]
        }
      });
  }]);