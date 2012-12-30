var ModelController = function($scope, $rootScope, $http, $location, $routeParams, $blackscholes) {

  $scope.calc = function(){
    $scope.theoreticalCall = $blackscholes.calculate('c', parseFloat($scope.strike), parseFloat($scope.underlying), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
    $scope.theoreticalPut = $blackscholes.calculate('p', parseFloat($scope.strike), parseFloat($scope.underlying), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
  }

}
