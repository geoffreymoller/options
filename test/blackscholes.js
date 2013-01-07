describe('Black Scholes', function(){

  beforeEach(module('options.tools'));

  var bs;
  beforeEach(function(){
    inject(function($injector) {
      bs = $injector.get('$blackscholes');
    });
  });

  describe('calculate', function(){

    function round(number, factor){
      var factor = factor || 5;
      factor = Math.pow(10, factor);
      return Math.round(number * factor) / factor;
    }

    it('correctly calculates option and greeks values', function(){
      var results = bs.calculate('c', 100, 100, 365, 5, 20);  
      expect(round(results.option)).toEqual(10.45058);
      expect(round(results.delta)).toEqual(0.63683);
      expect(round(results.gamma)).toEqual(0.01876);
      expect(round(results.vega)).toEqual(37.52403);
      expect(round(results.theta)).toEqual(6.41403);

      results = bs.calculate('c', 90, 100, 365, 5, 20);  
      expect(round(results.option)).toEqual(5.09122);
      expect(round(results.delta)).toEqual(0.42983);
      expect(round(results.gamma)).toEqual(0.02182);
      expect(round(results.vega)).toEqual(35.34799);
      expect(round(results.theta)).toEqual(5.21448);

      results = bs.calculate('c', 100, 90, 365, 5, 20);  
      expect(round(results.option)).toEqual(16.69945);
      expect(round(results.delta)).toEqual(0.80970);
      expect(round(results.gamma)).toEqual(0.01358);
      expect(round(results.vega)).toEqual(27.16258);
      expect(round(results.theta)).toEqual(5.92980);
    })

  });

});
