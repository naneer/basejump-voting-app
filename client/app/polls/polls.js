'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('polls', {
        abstract: true,
        url: '/polls',
        templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl',
        controllerAs: 'ctrl'
      });
  }]);