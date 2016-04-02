//WATCHERS AND THE DIGEST LOOP
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter','$timeout', function($scope,$filter,$timeout) {
  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.$watch('handle', function(newValue, oldValue){
    console.info('Changed!');
    console.log('old:' + oldValue);
    console.log('new:' + newValue);

  });
  $timeout(function() {
    $scope.$apply(function(){
    $scope.handle = 'newtwitterhandle';
    console.log('scope changed');
  });
  }, 3000);

}]);
