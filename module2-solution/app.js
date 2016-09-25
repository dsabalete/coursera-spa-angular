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
            ShoppingListCheckOffService.buy(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var list2 = this;

        list2.items = ShoppingListCheckOffService.getItemsBought();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemsToBuy = [
            { name: 'cookies', quantity: 10 },
            { name: 'candies', quantity: 4 },
            { name: 'water', quantity: 5 },
            { name: 'avocados', quantity: 3 },
            { name: 'bananas', quantity: 6 }
        ];
        service.itemsBought = [];

        service.buy = function (itemIndex) {
            var item = service.itemsToBuy.splice(itemIndex, 1);

            service.itemsBought.push({ name: item.name, quantity: item.quantity });
        };

        service.getItemsToBuy = function () {
            return service.itemsToBuy;
        };

        service.getItemsBought = function () {
            return service.itemsBought;
        };        
    }


})();