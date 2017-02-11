(function () {

    'use strict';

    angular.module('myApp', [])
        .controller("myCtrl", myCtrl)
        .filter('loves',LovesFilter)
        .filter('custom',CustomFilter);


    myCtrl.$inject = ['$scope','lovesFilter']


    function myCtrl($scope,lovesFilter) {

        $scope.msg = 'I Like AngularJs';

        $scope.lovesmsg=lovesFilter($scope.msg);

    }

    function LovesFilter() {

        return function (input) {
            input = input || '';
            input=input.replace('Like','Loves');
            return input;


        }


    }

    function CustomFilter(){


        return function(input,target,replace){
            input=input||'';
            input=input.replace(target,replace);
            return input;


        }
    }


})();