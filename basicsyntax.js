angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
    }]);


angular.module('abc', []).controller("index", ["$scope", function ($scope) { 
$scope.favoriteWord; 
$scope.favoriteColor; 
    $scope.favoriteShape; 
    
}]);

angular.module("css", [])
	.controller("index", ["$scope", function ($scope) {
		$scope.value;
		$scope.Bold = function () { return $scope.value % 2 === 0; };
		$scope.Italic = function () { return $scope.value % 3 === 0; };
		$scope.Underlined = function () { return $scope.value % 5 === 0; };
	}]);

angular.module("repeater", [])
    .controller("index", ["$scope", function ($scope){
        
        
    }])