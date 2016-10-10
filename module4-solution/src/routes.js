(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/category.template.html',
                resolve: {
                    categories: ['MenuDataService', function MenuDataService(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller: 'CategoryController as categoryCtrl'
            })

            // .state('categories.itemsDetails', {
            //     url: '/item-details/{itemShortName}',
            //     templateUrl: 'src/templates/items-details.template.html',
            //     resolve: {
            //         items: ['$stateParams', 'MenuDataService', function MenuDataService($stateParams, MenuDataService) {
            //             return MenuDataService.getItemsForCategory($stateParams.itemShortName);
            //         }]
            //     },
            //     controller: 'ItemDetailsController as itemDetailsCtrl'
            // })

            ;
    }

})();