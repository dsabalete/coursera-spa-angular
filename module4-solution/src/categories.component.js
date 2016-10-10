(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.template.html',
            controller: 'CategoriesController as catCtrl',
            // controller: ['MenuDataService', function (MenuDataService) {
            //     var ctrl = this;
            //     MenuDataService.getAllCategories().then(function (list) {
            //         ctrl.list = list;
            //         console.log(list);
            //     }, function (e) {
            //         console.log('something went wrong', e);
            //     });
            // }],
            bindings: {
                items: '<'
            }
        });


})();