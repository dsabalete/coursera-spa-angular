(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService ', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;


        service.getAllCategories = function () {
            console.log('service.getAllCategories()');

            $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function success(response) {
                return response;
            }, function error(response) {
                console.error(response);
            });
        };



        service.getItemsForCategory = function (categoryShortName) {
            console.log('service.getItemsForCategory()');

            $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
            }).then(function success(response) {
                return response;
            }, function error(response) {
                console.error(response);
            });
        };
        

    }


})();