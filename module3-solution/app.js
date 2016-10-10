(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])

        .controller('NarrowItDownController', NarrowItDownController)

        .service('MenuSearchService', MenuSearchService)

        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true,
            transclude: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;

    }


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

        ctrl.removeItem = function (itemIndex) {
            ctrl.items.splice(itemIndex, 1);
        };

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
