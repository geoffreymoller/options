var ModelController = function($scope, $rootScope, $http, $location, $routeParams, $blackscholes) {

  //default values
  $scope.strike = 100;
  $scope.underlying = 100;
  $scope.tte = 365;
  $scope.ir = 5;
  $scope.volatility = 20;

  $scope.calc = function(){

    var call = $blackscholes.calculate('c', parseFloat($scope.underlying), parseFloat($scope.strike), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
    $scope.call = call.option;
    $scope.callDelta = call.delta;
    $scope.callTheta = call.theta;

    $scope.callGamma = call.gamma;
    $scope.callVega = call.vega;
    $scope.d1 = call.d1;
    $scope.d2 = call.d2;
    $scope.N1 = call.N1;
    $scope.N2 = call.N2;
    $scope.N1_ = call.N1_;

    var put = $blackscholes.calculate('p', parseFloat($scope.underlying), parseFloat($scope.strike), 
      parseFloat($scope.tte), parseFloat($scope.ir), parseFloat($scope.volatility));    
    $scope.put = put.option;
    $scope.putDelta = put.delta;
    $scope.putTheta = put.theta;
    $scope.putGamma = put.gamma;
    $scope.putVega = put.vega;

  }

}
