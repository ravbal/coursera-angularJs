/**
 * Created by ravali on 2/4/17.
 */
(function(){

    'use strict';

    angular.module("myApp",[])
        .controller("nameCalculator",function($scope){

            $scope.name="";
            $scope.totalValue=0;
            $scope.displayNumberic=function(){

                var totalNameValue=CalculateNumericValue($scope.name);
                $scope.totalValue=totalNameValue;
            }

            function CalculateNumericValue(input){
                var inputString=0;
                for(var i=0;i<input.length;i++){
                    inputString+=input.charCodeAt(i);


                }
                return inputString;


            }



        })



})();