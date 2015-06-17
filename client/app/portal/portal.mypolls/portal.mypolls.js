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
            'Poll', 'Auth',
            function(Poll, Auth){
              return Poll.query({user_id: Auth.getCurrentUser()._id}).$promise;
            }
          ]
        }
      });
  }]);