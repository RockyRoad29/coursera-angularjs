(function(){
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.getItems = function() {
        return ShoppingListCheckOffService.getItemsToBuy();
    };

    ctrl.isEmpty = function() {
        var mt = (ctrl.getItems().length <= 0);
        return mt;
    };

    ctrl.setBought = function(index) {
        return ShoppingListCheckOffService.setBought(index);
    };

    ctrl.addToList = function(new_qty, new_name) {
        ShoppingListCheckOffService.addToBuy(ctrl.new_qty, ctrl.new_name);
        ctrl.new_qty = "";
        ctrl.new_name = "";
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.getItems = function() {
        return ShoppingListCheckOffService.getItemsAlreadyBought();
    };

    ctrl.isEmpty = function() {
        var mt = (ctrl.getItems().length <= 0);
        return mt;
    };
}

function ShoppingListCheckOffService() {
    var service = this;

    var to_buy = [
        {"quantity": "1 bag",   "name": "cookies"},
        {"quantity": "1 kg",    "name": "wheat flour"},
        {"quantity": "2 packs", "name": "cooking chocolate"},
        {"quantity": "1 bag",   "name": "sultanas"},
        {"quantity": "1 pound", "name": "pears"},
        {"quantity": "1 box",   "name": "vanilla icecream"},
        {"quantity": "6 pc",    "name": "fresh eggs"},
        {"quantity": "200 ml",  "name": "fresh cream"},
        {"quantity": "1 pack",  "name": "backing powder"}
    ];
    var bought = [
        // {"quantity": "2 packs",  "name": "backing powder"}
    ];
    service.setBought = function(index) {
        console.log("Bought item #", index);
        var items = to_buy.splice(index,1);
        console.log("item remove: %s", JSON.stringify(items[0]));
        bought.push(items[0]);
    };
    service.getItemsToBuy = function () {
        // console.log("%d items to buy", to_buy.length);
        return to_buy;
    };
    service.getItemsAlreadyBought = function () {
        // console.log("%d items bought", bought.length);
        return bought;
    };
    service.addToBuy = function(new_qty, new_name) {
        var item = {"quantity": new_qty,   "name": new_name};
        console.log("Adding item: ", item);
        return to_buy.push(item);
    }
}
})();
