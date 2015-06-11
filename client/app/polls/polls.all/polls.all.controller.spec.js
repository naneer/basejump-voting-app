'use strict';

describe('Controller: PollsAllCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PollsAllCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollsAllCtrl = $controller('PollsAllCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
