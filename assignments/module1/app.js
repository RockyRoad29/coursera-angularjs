(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.menu = ""; // "snack,cookies";

  $scope.too_much = function () {
      var items = $scope.menu.split(',');
      console.log(items);
      if ($scope.menu == "") {
          $scope.message = "Please enter data first";
      } else {
          $scope.message = items.length <= 3 ? "Enjoy!" : "Too much!";
      }
  };
}

})();
