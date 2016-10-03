(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])

        .controller('NarrowItDownController', NarrowItDownController)

        .service('MenuSearchService', MenuSearchService);


    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var ctrl = this;

        ctrl.items = [];

        ctrl.narrowIt = function () {
            ctrl.items = [];
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (result) {
                ctrl.items = result;
            });
        };

        //MenuSearchService.getMatchedMenuItems();

        // ctrl.getList = function (itemIndex) {
        //     MenuSearchService.buy(itemIndex);
        // };


    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            console.log("searching for: " + searchTerm);
            var foundItems = [];
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                // process result and only keep items that match
                var menu_items = result.data.menu_items;
                for (var i = 0; i < menu_items.length; i++) {
                    var elem = menu_items[i];
                    if (elem.description.indexOf(searchTerm) !== -1 || searchTerm === undefined) {
                        foundItems.push(elem);
                    }
                }
                // return processed items
                return foundItems;
            });
        };
    }

})();
