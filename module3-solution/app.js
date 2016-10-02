(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])

        .controller('NarrowItDownController', NarrowItDownController)

        .service('MenuSearchService', MenuSearchService);


    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var ctrl = this;

        ctrl.narrowIt = function () {
            
            ctrl.items = MenuSearchService.getMatchedMenuItems();
            console.log('narrow it!', ctrl.items.length);
        };

        //MenuSearchService.getMatchedMenuItems();

        // ctrl.getList = function (itemIndex) {
        //     MenuSearchService.buy(itemIndex);
        // };


    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var foundItems = [];

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                // process result and only keep items that match
                
                foundItems = result.data.menu_items;
                
                // return processed items
                return foundItems;
            });
        };

        
    }

})();