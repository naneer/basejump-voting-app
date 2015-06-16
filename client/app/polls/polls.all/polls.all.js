'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('polls.all', {
        url: '',
        templateUrl: 'app/polls/polls.all/polls.all.html',
        controller: 'PollsAllCtrl',
        controllerAs: 'ctrl',
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