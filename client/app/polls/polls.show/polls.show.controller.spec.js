'use strict';

describe('Controller: PollsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PollsShowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollsShowCtrl = $controller('PollsShowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
