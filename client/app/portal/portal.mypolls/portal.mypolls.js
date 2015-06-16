'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('portal.mypolls', {
        url: '/mypolls',
        templateUrl: 'app/portal/portal.mypolls/portal.mypolls.html',
        controller: 'PortalMypollsCtrl',
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