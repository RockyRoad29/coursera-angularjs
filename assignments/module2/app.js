var app=angular.module('ShoppingListCheckOff',[]);
app.controller('ShoppingListController', function($scope) {
    $scope.to_buy = [
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
    $scope.bought = [
        // {"quantity": "2 packs",  "name": "backing powder"}
    ];
    $scope.bought_item = function(index) {
        console.log("Bought item #", index);
        var items = $scope.to_buy.splice(index,1);
        console.log("items removed: ", items);
        $scope.bought.push(items[0]);
        console.log("bought: ", $scope.bought);
    }
});
