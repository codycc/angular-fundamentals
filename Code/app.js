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


//GETTING OTHER SERVICES
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', function($log,$scope, $filter) {
//   //Log service enchances console.log
//   $log.log("Hello");
//   $log.info("Here is some information");
//   $log.warn("Warning!");
//   $log.debug('Some debug information while writing my code');
// });


// $SCOPE $FILTER AND $LOG
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', function($log,$scope,$filter) {
//   $scope.name = "cody";
//   //Using $filter $scope and $log together
//   $scope.formattedname = $filter('uppercase')($scope.name);
//
//   $log.info($scope.name); // cody
//   $log.info($scope.formattedname) // CODY
// });

//USING NGRESOURCE
// var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
// myApp.controller('mainController', function($log,$scope,$filter,$resource) {
//
//   console.log($resource)
//
// });

// NOTETOSELF : CHECK OUT NGMODULES, CODE CAN BE GRABBED, REFERENCED
// AS DEPENDENCY AND USED

// //DEALING WITH MINIFICATION
// var myApp = angular.module('myApp', []);
// // the order matters, angular looks at first two elements of array and matches them with
// // the order of the parameters
// myApp.controller('mainController',['$scope', '$log', function($scope, $log) {
//
//   $log.info($scope);
//
// }]);

//Minifier will never touch whats inside a string
//MINIFIED VERSION
// myApp.controller("mainController",["$scope","$log",function(o,n){o.info(n)}]);

//SCOPE INTERPOLATION
// var myApp = angular.module('myApp', []);
// myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
//
//   $scope.name = "cody"
// //Switches 'cody' to 'everybody' with the timeout
//   $timeout(function() {
//     $scope.name = "Everybody";
//   },3000);
// }]);
