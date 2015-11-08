angular.module ("injector", ["service"])
    .controller("injection", ["$scope", "message", function($scope, message){
        $scope.message =message;               
    }]);