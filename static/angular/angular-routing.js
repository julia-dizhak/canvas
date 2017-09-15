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
});

// create the controller and inject Angular's $scope
canvasExamplesApp.controller('examplesController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Play with canvas';
});
