(function () {
    'use strict';
    angular.module('myFirstApp', []).controller('myFirstController', 
        function ($scope){
            $scope.name = "Krish";
            $scope.sayHello = function () {
                return "Hello Coursera!";
        }
    });
})();