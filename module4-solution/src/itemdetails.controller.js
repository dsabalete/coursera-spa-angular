(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailsController', ItemDetailsController);


    ItemDetailsController.$inject = ['item', 'categories', '$stateParams'];
    function ItemDetailsController(item, categories, $stateParams) {
        var itemDetailsCtrl = this;
        itemDetailsCtrl.itemDetails = item.data.menu_items;

        console.log($stateParams.menuIndex);

        var menuItem = categories.data[$stateParams.menuIndex];
        itemDetailsCtrl.menuName = menuItem.name;
    }

})();