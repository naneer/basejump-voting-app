'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'ctrl',
        authenticate: true,
        resolve: {
          usersObj: [
            'User',
            function(User){
              return User.query().$promise;
            }
          ]
        }
      });
  }]);