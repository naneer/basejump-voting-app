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
          pollObj: [
            '$resource', '$stateParams',
            function($resource, $stateParams){
              var Poll = $resource('https://private-b9196-pubop.apiary-mock.com/api/polls/:id', { id: '@poll_id' });
              return Poll.get({id: $stateParams.id}).$promise;
            }
          ],
          currentUser: [
            'Auth',
            function(Auth){
              return Auth.getCurrentUser();
            }
          ]
        }
      });
  });