'use strict';

/**
 * @ngdoc function
 * @name formlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formlyApp
 */
angular.module('formlyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
