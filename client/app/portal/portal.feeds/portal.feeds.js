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
            'Poll', 
            function(Poll){
              return Poll.query().$promise;
            }
          ]
        }
      });
  }]);