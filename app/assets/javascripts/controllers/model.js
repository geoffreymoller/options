var ModelController = function($scope, $rootScope, $http, $location, $routeParams, $blackscholes) {

  //default values
  $scope.strike = 50;
  $scope.underlying = 55;
  $scope.tte = .08219; //30;
  $scope.ir = .08; //8;
  $scope.volatility = .30; //30;

  $scope.calc = function(){
    $scope.theoreticalCall = $blackscholes.calculate('c', parseFloat($scope.strike), parseFloat($scope.underlying), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
    $scope.theoreticalPut = $blackscholes.calculate('p', parseFloat($scope.strike), parseFloat($scope.underlying), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
  }

}
