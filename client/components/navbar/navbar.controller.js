'use strict';

angular.module('workspaceApp')
  .controller('NavbarCtrl', [ '$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.menu = [
      {
        'title': 'My Portal',
        'route': 'portal.feeds'
      },
      {
        'title': 'Add Poll',
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
      var parentRoute = $state.$current.name.split(".")[0];
      if(parentRoute === 'portal'){
        return route.split(".")[0] === parentRoute; 
      }
      return $state.is(route);
    };
  }]);