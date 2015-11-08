angular.module('msg', [])
    .controller("message", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
    }]);


angular.module('abc', [])
    .controller("model", ["$scope", function ($scope) { 
        $scope.favoriteWord; 
        $scope.favoriteColor; 
        $scope.favoriteShape; 
    
    }]);

angular.module('css', [])
	.controller("class", ["$scope", function ($scope) {
		$scope.value;
		$scope.Bold = function () { return $scope.value % 2 === 0; };
		$scope.Italic = function () { return $scope.value % 3 === 0; };
		$scope.Underlined = function () { return $scope.value % 5 === 0; };
	}]);

angular.module('repeates', [])
    .controller("repeater", ["$scope", function ($scope){
        $scope.products = [
            {id:1, name: "abc"},
            {id:2, name: "def"},
            {id:3, name: "efg"},
            {id:4, name: "hij"}
        ];    
        
    }]);

angular.module ('multiple', [])
    .controller("showhide", ["$scope", function ($scope){
        $scope.isFirst = true; 
        $scope.isSecond=true; 
        $scope.isThird;    
    }]);

angular.module ("injector", [])
    .value("message", "Hello World!");
    .controller("injection", ["$scope", "message", function ($scope), message){
                      
    }]);



