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
    			controller : 'HomeCtrl as hc'
    	});

        $stateProvider.
            state('dashboard',{
                url: '/dashboard',
                templateUrl : 'core/views/dashboard.view.html',
                controller : 'DashboardCtrl as dc'
        }); 

        $stateProvider.
            state('dashboard.create',{
                url: '/create',
                templateUrl : 'core/views/createApi.view.html',
                controller : 'CreateAPICtrl as cc'
        });   
    }
      
}).call(this);