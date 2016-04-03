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
//    // GET REQUESTS
//    $http.get('/api')
//       .success(function (result) {
//         $scope.rules = result;
//       })
//       .error(function (data, status){
//         console.log(data);
//       });
//    $scope.newRule = '';
//    $scope.addRule = function () {
//
//     $http.post('/api', { newRule: $scope.newRule})
//       .success( function (result){
//         $scope.rules = result;
//         $scope.newRule = '';
//
//       })
//       .error(function (data, stats){
//         console.log(data);
//       })
//    };

// }]);
// MULTIPLE VIEWS AND MULTIPLE CONTROLLERS
// var myApp = angular.module('myApp', []);
//
// myApp.controller('mainController', ['$scope', function($scope){
//
//   $scope.name = 'cody';
// }]);
//
// myApp.controller('secondController', ['$scope', function($scope){
//
//   $scope.name = 'Second';
// }]);

//ROUTING, TEMPLATES, AND CONTROLLERS
// and creating a service
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second/', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.service('nameService', function(){
  var self = this;
  this.name = 'John Doe';
  this.nameLength = function(){
    return self.name.length;
  };
});

myApp.controller('mainController', ['$scope', '$log',function($scope,$log){

  $scope.people =[
    {
    name: 'john doe',
    address: "555 main",
    city: 'new york',
    state: 'ny',
    zip: '1111'
    },
    {
    name: 'jane doe',
    address: "25 main",
    city: 'new york',
    state: 'ny',
    zip: '1111'
    },
    {
    name: 'george doe',
    address: "5545 main",
    city: 'new york',
    state: 'ny',
    zip: '1111'
    }
  ]

  $scope.formattedAddress = function(person) {
    return person.address + ', ' + person.city + ' ' + person.state + ' ' + person.zip;

  };

}]);


myApp.controller('secondController', ['$scope', '$log','$routeParams', function($scope, $log, $routeParams){

}]);

myApp.directive('searchResult', function(){
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "=",
      // & means there is a function
      formattedAddressFunction: "&"
    },
    transclude: true
  }
});
