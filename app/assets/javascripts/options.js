angular.module('options', ['options.blackscholes']).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/model/blackscholes', { templateUrl: 'blackscholes.html', controller: ModelController }).
      otherwise({ redirectTo: '/model/blackscholes' })
  }]).
  run(function($rootScope){
    $(document).on('keydown', function(e){
      $rootScope.$broadcast('keydown', e); 
    }); 
  });
