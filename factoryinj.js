angular.module("main",["factory"])
    .controller("functioninj", ["$scope","square", function($scope,square){
        $scope.input; 
        $scope.product=square; 
    }]);