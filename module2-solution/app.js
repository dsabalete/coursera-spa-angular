(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyController', ToBuyController)

        .controller('AlreadyBoughtController', AlreadyBoughtController)

        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);




    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        var list1 = this;

        list1.items = ShoppingListCheckOffService.getItemsToBuy();

        list1.buy = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var list2 = this;

        list2.items = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [
            { name: 'cookies', quantity: 10 },
            { name: 'candies', quantity: 4 },
            { name: 'water', quantity: 5 },
            { name: 'avocados', quantity: 3 },
            { name: 'bananas', quantity: 6 }
        ];
        var itemsBought = [];

        service.buyItem = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            itemsBought.push(item);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };
    }


})();