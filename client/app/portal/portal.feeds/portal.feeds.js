'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('portal.feeds', {
        url: '',
        templateUrl: 'app/portal/portal.feeds/portal.feeds.html',
        controller: 'PortalFeedsCtrl',
        controllerAs: 'ctrl',
        authenticate: true,
        resolve: {
          pollsObj: [
            '$resource', 
            function($resource){
              var Polls = $resource('https://private-b9196-pubop.apiary-mock.com/api/polls?page=1');
              return Polls.query().$promise;
            }
          ]
        }
      });
  }]);