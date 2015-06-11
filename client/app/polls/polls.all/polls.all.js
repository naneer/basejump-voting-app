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
            '$resource', 
            function($resource){
              var Polls = $resource('https://private-b9196-pubop.apiary-mock.com/api/polls?page=1');
              return Polls.query().$promise;
            }
        ]}
      });
  }]);