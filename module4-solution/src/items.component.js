(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/items.template.html',
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