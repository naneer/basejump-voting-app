'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('portal', {
        url: '/portal',
        templateUrl: 'app/portal/portal.html',
        controller: 'PortalCtrl'
      });
  });