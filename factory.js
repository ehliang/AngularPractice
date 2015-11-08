angular.module("factory", [])
    .value("factor",6)
    
    .factory("square", ["factor", function(factor){
            return factor*factor; 
    }]);