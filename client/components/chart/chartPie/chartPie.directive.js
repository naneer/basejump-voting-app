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
      var myNewChart;
      var data = ctrl.choices;
      var ctx = element[0].getContext("2d");    
      var Chartjs = chartService.getChart();
      
      var doughnutOrPie = function(type){
        if(type === 'doughnut'){
          return new Chartjs(ctx).Doughnut(data);
        } else if(type === 'pie') {
          return new Chartjs(ctx).Pie(data);        
         }
      };
      
      scope.$watch('ctrl.type', function(n, o){
        var percentageInnerCutout;
        if(n !== o) {
          if(n === 'pie'){
            percentageInnerCutout = 0;
          } else if(n === 'doughnut'){
            percentageInnerCutout = 50;
          }
          myNewChart.options.percentageInnerCutout = percentageInnerCutout;
          myNewChart.update();
        };
      });

      scope.$watch('ctrl.choices', function(n, o){
        var grayData = {
          'label': '',
          'color': '#ccc',
          'value': 1
        };
        
        var count = n.length - myNewChart.segments.length;
        if(count > 0){
          for(var i = 0; i < count; i++){
            myNewChart.addData(grayData)
          }
        } else if (count < 0) {
          for(var i = 0; i > count; i--){
            myNewChart.removeData();
          }
        }
        data = myNewChart.segments;
      });

      myNewChart = doughnutOrPie(ctrl.type);
      }
    };
  }]);
})();