'use strict';

/**
 * @ngdoc function
 * @name formlyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formlyApp
 */
angular.module('formlyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
