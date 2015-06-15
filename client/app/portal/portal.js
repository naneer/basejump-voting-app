'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('portal', {
        abstract: true,
        url: '/portal',
        templateUrl: 'app/portal/portal.html',
        controller: 'PortalCtrl',
        controllerAs: 'ctrl',
        authenticate: true
      });
  }]);