'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls.show', {
        url: '/:id',
        templateUrl: 'app/polls/polls.show/polls.show.html',
        controller: 'PollsShowCtrl',
        controllerAs: 'ctrl',
        resolve: {
          currentUser: [
            'Auth',
            function(Auth){
              if(Auth.isLoggedIn()){
                return Auth.getCurrentUser();
              } 
              return "guest";
            }
          ],
          currentPoll: [
            'Poll', '$stateParams',
            function(Poll, $stateParams){
              return Poll.get({id: $stateParams.id}).$promise;
            }
          ]
        }
      });
  });