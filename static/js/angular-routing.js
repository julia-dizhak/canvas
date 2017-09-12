var canvasExamplesApp = angular.module('canvasExamplesApp', ['ngRoute']);

// configure our routes
canvasExamplesApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'examplesController'
        })

        // route for the about page
        .when('/chessboard', {
            templateUrl : 'pages/chessboard.html',
            controller  : 'chessboardController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
canvasExamplesApp.controller('examplesController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

canvasExamplesApp.controller('chessboardController', function($scope) {
    //$scope.message = 'test';
});

canvasExamplesApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
