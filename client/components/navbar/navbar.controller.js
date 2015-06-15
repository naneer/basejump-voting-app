'use strict';

angular.module('workspaceApp')
  .controller('NavbarCtrl', [ '$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.menu = [
      {
        'title': 'My Portal',
        'link': '/portal',
        'route': 'portal.feeds'
      },
      {
        'title': 'Add Poll',
        'link': '/polls/new',
        'route': 'polls.new'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $state.go('login');
    };

    $scope.isActive = function(route) {
      return route.split(".")[0] === $state.$current.name.split(".")[0];
    };
  }]);