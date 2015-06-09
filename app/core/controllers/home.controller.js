;(function(){
'use strict';

angular.
  module('core').
  controller('HomeCtrl', HomeCtrl);

 function HomeCtrl ($scope, $state){
 	var hc = this;

	hc.goDashboard = function(){
		$state.go('dashboard');
	}
 }

}).call(this);