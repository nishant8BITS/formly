;(function(){
'use strict';

 angular.
    module('core').
    config(main);

    /* @Inject */
    function main($stateProvider, $urlRouterProvider){

        // Otherwise redirect to home page 
        $urlRouterProvider.otherwise('/');

    	// Setup the state 
    	$stateProvider.
    	   state('home',{
    			url: '/',
    			templateUrl : 'core/views/home.view.html',
    			controller : 'HomeCtrl as vm'
    	});
    }
      
}).call(this);