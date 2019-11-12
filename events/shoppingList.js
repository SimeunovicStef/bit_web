'use strict'

function Product(name, price, expirationDate) {
    this.productId = productId;
    //  Math.floor((Math.random() * 90000) + 10000);
    this.name = name;
    this.price = parseFloat(price);
    this.expirationDate = expirationDate;
}

function ShoppingBag() {
    this.listOfProducts = "";

}

Product.prototype.getInfo = function () {
    return this.name + " ->" + this.name.charAt(0) + this.name.charAt([this.name.length - 1]).toUpperCase() + this.productId + ", " + this.name + ", " + this.price;
}





console.log(Product());