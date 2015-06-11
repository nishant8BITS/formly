;(function(){
	'use strict';
	angular   
		.module('core')
		.controller('DashboardCtrl', DashboardCtrl);

		/* Create API */
		function DashboardCtrl($scope, $state){
			var dc = this; 
			dc.createApi = function(){
				$state.go('dashboard.create');
			}
		}

}).call(this);