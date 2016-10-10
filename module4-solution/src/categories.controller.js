(function () {
    'use strict';

    angular.module('data')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categories'];
    function CategoryController(categories) {
        console.log('CategoryController');
        console.log(categories.data);

        var categoryCtrl = this;
        categoryCtrl.categoryList = categories.data;

    }

})();