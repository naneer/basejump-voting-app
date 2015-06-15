'use strict';

describe('Controller: PortalFeedsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PortalFeedsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortalFeedsCtrl = $controller('PortalFeedsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
