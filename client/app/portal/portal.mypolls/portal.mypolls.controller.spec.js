'use strict';

describe('Controller: PortalMypollsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PortalMypollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortalMypollsCtrl = $controller('PortalMypollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
