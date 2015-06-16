'use strict';

angular.module('workspaceApp')
  .factory('Choice', ['$resource', function ($resource) {
    return $resource('/api/polls/:id/choices/:choice_id', {
      id: '@id',
      choice_id: '@choice_id'
    })
  }]);
