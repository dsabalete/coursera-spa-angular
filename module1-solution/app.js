(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.menu = '';
        $scope.message = '';
        $scope.numItems = 0;

        $scope.check = function () {
            var items = $scope.menu.split(',');

            if ($scope.menu.trim() === '') {
                $scope.message = 'Please enter data first';
                 $scope.numItems = 0;
                return;
            }

            var result = [];
            angular.forEach(items, function (item) {
                if (item !== '') {
                    result.push(item);
                }
            });

            $scope.numItems = result.length;

            if (result.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        };
    }

})();