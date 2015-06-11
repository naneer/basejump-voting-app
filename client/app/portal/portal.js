'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('portal', {
        url: '/portal',
        templateUrl: 'app/portal/portal.html',
        controller: 'PortalCtrl',
        controllerAs: 'ctrl',
        resolve: {
          pollsObj: [
            '$resource', 
            function($resource){
              var Polls = $resource('https://private-b9196-pubop.apiary-mock.com/api/polls?page=1');
              return Polls.query().$promise;
            }
          ]
        },
        authenticate: true
      });
  }]);