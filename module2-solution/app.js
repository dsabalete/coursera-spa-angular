(function () {
    'use strict';

    angular.module('ShoppingList', [])

        .controller('ShoppingListController', ShoppingListController);



    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.list1 = [
            { name: 'cookies', quantity: 10},
            { name: 'candies', quantity: 4},
            { name: 'water', quantity: 5},
            { name: 'avocados', quantity: 3},
            { name: 'bananas', quantity: 6}
        ];

        $scope.list2 = [];   

        $scope.buy = function(itemIndex) {
            console.log(itemIndex);

            var item = $scope.list2.splice(itemIndex, 1);

            console.log(item);
            
            $scope.list2.push(item);
        };

             
    }

})();