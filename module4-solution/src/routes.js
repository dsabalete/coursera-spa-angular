(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/main-categories.template.html',
                // controller: 'CategoriesController as catCtrl',
                // resolve: {
                //     items: ['MenuDataService', function (MenuDataService) {
                //         return MenuDataService.getAllCategories();
                //     }]
                // }
            })
            
            .state('categories.items', {
                url: '/items/{categoriId}',
                templateUrl: 'src/templates/items-category.template.html'
            });
    }

})();