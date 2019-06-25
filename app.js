(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var itemsToBuy = this;

itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

itemsToBuy.removeAndAddItem = function (itemIndex) {

  ShoppingListCheckOffService.removeAndAddItem(itemIndex);
  };
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var itemsBought = this;

itemsBought.itemsBoughtList = function () {
    return ShoppingListCheckOffService.getItemsBought();
  };
  itemsBought.items = itemsBought.itemsBoughtList();
}
function ShoppingListCheckOffService(){
  var service = this;

// List of shopping items
var itemsToBuy = [{
  name : "cookies",
  quantity : 10
},{
  name : "fruits",
  quantity : 7
},{
  name : "chocolates",
  quantity : 100
},{
  name : "milk packets",
  quantity : 4
},{
  name : "veggies",
  quantity : 3
}],
itemsBought = [];

service.removeAndAddItem = function(itemIndex){
  var item = {
    name: itemsToBuy[itemIndex].name,
    quantity: itemsToBuy[itemIndex].quantity
  };
    itemsBought.push(item);
    itemsToBuy.splice(itemIndex,1);
};

service.getItemsBought = function () {
  return itemsBought;
};

service.getItemsToBuy = function () {
  return itemsToBuy;
};
}
})();
