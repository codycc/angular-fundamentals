//WATCHERS AND THE DIGEST LOOP
// var myApp = angular.module('myApp', []);
//
// myApp.controller('mainController', ['$scope', '$filter','$timeout', function($scope,$filter,$timeout) {
//   $scope.handle = '';
//
//   $scope.lowercasehandle = function() {
//     return $filter('lowercase')($scope.handle);
//   };
//
//   $scope.$watch('handle', function(newValue, oldValue){
//     console.info('Changed!');
//     console.log('old:' + oldValue);
//     console.log('new:' + newValue);
//
//   });
//   $timeout(function() {
//     $scope.$apply(function(){
//     $scope.handle = 'newtwitterhandle';
//     console.log('scope changed');
//   });
//   }, 3000);
//
// }]);

//COMMON DIRECTIVES
// var myApp = angular.module('myApp', []);
//
// myApp.controller('mainController', ['$scope', '$filter', function($scope,$filter) {
//   $scope.handle = '';
//
//   $scope.lowercasehandle = function() {
//     return $filter('lowercase')($scope.handle);
//   };
//   $scope.characters = 5;
//
//   $scope.rules = [
//     {rulename: "Must be 5 characters"},
//     {rulename: "Must not be used elsewhere"},
//     {rulename: "Must be cool"}
//   ];
//   console.log($scope.rules);
//
//
// }]);

//EXTERNAL DATA AND $HTTP
// myApp.controller('mainController', ['$scope', '$filter', '$http' function($scope, $filter, $http) {
//   $scope.handle = '';
//
//   $scope.lowercasehandle = function() {
//    return $filter('lowercase')($scope.handle);
//    };
//    $scope.characters = 5;
//    // IF JSON WAS ON THIS URL
//    $http.get('/api')
//       .success(function (result) {
//         $scope.rules = result;
//       })
//       .error(function (data, status){
//         console.log(data);
//       });
//
// }]);
