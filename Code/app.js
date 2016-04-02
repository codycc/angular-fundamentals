//The scope service
var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($scope) {
  $scope.name = "cody";
  $scope.skill = "programming";
  $scope.getName = function() {
    return "john doe";
  }

  console.log($scope)

});
