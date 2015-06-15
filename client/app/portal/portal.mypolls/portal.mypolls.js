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
            '$resource',
            function($resource){
              var Polls = $resource('https://private-b9196-pubop.apiary-mock.com/api/me/polls?page=1)');
              return Polls.query().$promise;
            }
          ]
        }
      });
  }]);