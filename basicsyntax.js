angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
    }]);


angular.module('abc', []).controller("index", ["$scope", function ($scope) { 
$scope.favoriteWord; 
$scope.favoriteColor; 
    $scope.favoriteShape; 
    
}]);

angular.module('css', []).controller("index", ["$scope", function ($scope) {
    $scope.value =1; 
    
    $scope.isBold = function() { return $scope.value %2 === 0;}; 
    $scope.isItalic = function () { return $scope.value%3 ===0; };
    $scope.isUnderline = function() { return $scope.value %5 === 0;}; 

}]);