(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])

        .controller('NarrowItDownController', NarrowItDownController)

        .service('MenuSearchService', MenuSearchService)

        // .directive('foundItems', FoundItemsDirective)

        .directive("foundItems", foundItems)
        
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



    // function FoundItemsDirective() {
    //     var ddo = {
    //         templateUrl: 'foundItems.template.html',
    //         scope: {
    //             foundItems: '<',
    //             onRemove: '&'
    //         },
    //         controller: FoundItemsDirectiveController,
    //         controllerAs: 'list',
    //         bindToController: true,
    //         transclude: true
    //     };

    //     return ddo;
    // }


    // function FoundItemsDirectiveController() {
    //     var list = this;

    // }


    function foundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getAllItems = function () {
            $http({
                url: (ApiBasePath + "/menu_items.json")
                //url: "https://davids-restaurant.herohuapp.com/menu_items.json"
            }).then(
                function (result) {
                    service.data = result.data;
                }, function (error) {
                    console.log(error);
                }
                );
        };

        service.getMatchedMenuItems = function (searchTerm) {
            if (!service.data) service.getAllItems();
            if (searchTerm === "") return [];
            var items = service.data.menu_items;
            var found = [];

            for (var i = 0; i < items.length; i++) {
                var desc = items[i].description;
                // console.log(desc);
                if (desc.indexOf(searchTerm) !== -1) {
                    found.push(items[i]);
                }
            }
            return found;
        };

        service.getAllItems();
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.found = [];
        ctrl.search = function () {
            ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        };
        ctrl.remove = function (index) {
            ctrl.found.splice(index, 1);
        };
    }




})();
