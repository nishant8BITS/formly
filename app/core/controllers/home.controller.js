;(function(){
'use strict';

angular.
  module('core').
  controller('HomeCtrl', HomeCtrl);

 function HomeCtrl ($scope, $state){
 	var hc = this;

	hc.createApi = function(){
		$state.go('create');
	}
 }

}).call(this);