angular.module('options.tools', [])

  .factory('$blackscholes', ['$rootScope', function($rootScope){

    return {

      /**
      * Black Scholes calculator 
      *
      * @method calculate
      * @param {String} PutCallFlag
      * @param {Number} S Underyling Price 
      * @param {Number} X Strike Price 
      * @param {Number} T Years to maturity 
      * @param {Number} r Risk-free rate 
      * @param {Number} v Volatility 
      * @return {Number} Returns true on success
      */
      //TODO - TESTS
      calculate:function(PutCallFlag, S, X, T, r, v) {

        var call = PutCallFlag === 'c';

        var T = T / 365;
        var r = r / 100;
        var v = v / 100;

        var o, d1, d2, N1, N2, N1_;
        var sqrT = Math.sqrt(T);
        var ert = Math.exp(-r * T);
        d1 = (Math.log(S / X) + (r + v * v / 2.0) * T) / (v * sqrT);
        d2 = d1 - v * sqrT 
        N1 = CND(d1);
        N2 = CND(d2);
        N1_ = Math.exp(-((d1 * d1) / 2)) / Math.sqrt(2 * Math.PI);

        if (call){
          o =  S * N1 - X * ert * N2;
        }
        else{
          o = X * ert * CND(-d2) - S * CND(-d1);
        }

        var delta = call ? N1 : N1 - 1;
        var gamma = N1_ / (S * v * sqrT);
        var vega = S * sqrT * N1_;
        var theta = call ? -(S * v * N1_) / (2 * sqrT) - r * X * ert * N2 :
                      -(S * v * N1_) / (2 * sqrT) + r * X * ert * CND(-d2);
        theta = -theta;

        return {
          d1: d1
          , d2: d2
          , N1: N1
          , N2: N2
          , N1_: N1_
          , option: o
          , delta: delta 
          , gamma: gamma 
          , vega: vega 
          , theta: theta 
        }
       
        /* The cummulative Normal distribution function: */

        function CND(x){
          var a1, a2, a3, a4 ,a5, k ;
          a1 = 0.31938153, a2 =-0.356563782, a3 = 1.781477937, a4= -1.821255978 , a5= 1.330274429;
          if(x<0.0){
            return 1-CND(-x);
          }
          else{
            k = 1.0 / (1.0 + 0.2316419 * x);
          }
          return 1.0 - Math.exp(-x * x / 2.0)/ Math.sqrt(2*Math.PI) * k * (a1 + k * (-0.356563782 + k * (1.781477937 + k * (-1.821255978 + k * 1.330274429))));

        }

      } 

    }

  }])

