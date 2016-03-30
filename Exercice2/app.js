var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];
    
    $scope.addDepense = function() {
			if($scope.valeur){
        $scope.depenses.push({ valeur: parseInt($scope.valeur) });
				}
    }
    
    $scope.rmDepense = function(i) {
        $scope.depenses.splice(i, 1);
    }
    
    $scope.doTotal = function() {
        var total = 0;
        for (var i = 0 ; i < $scope.depenses.length ; i++) {
            total += $scope.depenses[i].valeur;
        }
        $scope.total = total;
    }
    
    $scope.$watch("depenses", $scope.doTotal, true)
}]);
