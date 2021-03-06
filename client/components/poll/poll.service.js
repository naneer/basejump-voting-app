'use strict';

angular.module('workspaceApp')
  .factory('Poll', ['$resource', function ($resource) {
    return $resource('/api/polls/:id', {
      id: '@_id',
      user_id: '@user_id'
    });
  }]);
