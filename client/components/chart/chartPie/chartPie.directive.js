(function(){
'use strict';

angular.module('workspaceApp')
  .directive('chartPie', ['chartService', function (chartService) {
    return {
      templateUrl: 'components/chart/chartPie/chartPie.html',
      restrict: 'E',
      controller: angular.noop,
      controllerAs: 'ctrl',
      bindToController: true,
      replace: true,
      scope: {
        type: '=',
        choices: '='
      },
      link: function (scope, element, attrs, ctrl) {
      // Get the context of the canvas element we want to select
      var data = ctrl.choices;
      var ctx = element[0].getContext("2d");    
      var Chartjs = chartService.getChart();

      if(ctrl.type === 'doughnut'){
        var myNewChart = new Chartjs(ctx).Doughnut(data);
      } else if(ctrl.type === 'pie') {
        var myNewChart = new Chartjs(ctx).Pie(data);        
      }
      
      }
    };
  }]);
})();