//THE SCOPE SER
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', function($scope) {
//   $scope.name = "cody";
//   $scope.skill = "programming";
//   $scope.getName = function() {
//     return "john doe";
//   }
//
//   console.log($scope)
//
// });

//FUNCTIONS AND STRINGS
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', function($scope) {
// });
// // In angular you can pass functions as strings, which later on, peices can be parsed out
// var searchPeople = function searchPeople(firstName, lastName, height,age,occupation) {
//   return 'Jane Doe';
// }
// console.log(searchPeople);

//DEPENDENCY INJECTION
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', function($scope) {
//   console.log($scope);
// });
// // In angular you can pass functions as strings, which later on, peices can be parsed out
// var searchPeople = function searchPeople(firstName, $scope, height,age,occupation) {
//   return 'Jane Doe';
// }
// //Parses the string and creates an array out of the parameters
// console.log(angular.injector().annotate(searchPeople));
