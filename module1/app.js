/**
 * Created by ravali on 2/4/17.
 */
(function () {

    'use strict';

    angular.module("myApp", [])
        .controller("LunchChecker", LunchChecker);

    LunchChecker.$inject = ['$scope']

    function LunchChecker($scope) {

        $scope.items = "";

        $scope.Check = function () {

            if ($scope.items.length <= 0) {

                $scope.message = "Please enter data first";
            }

            else {


                var value = $scope.items;
                value = value.trim();
                value=value.replace(/ /g,"");
                value = value.split(",");

                if (value.length <= 3) {
                    $scope.message = "Enjoy";
                }
                else {
                    $scope.message = "Too Much";
                }

            }
        }


    }


})();