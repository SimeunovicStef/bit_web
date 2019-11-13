'use strict'

function Product(name, price, expirationDate) {
    this.productId = Math.floor((Math.random() * 90000) + 10000);
    this.name = name;
    this.price = parseFloat(price).toFixed(2);
    this.expirationDate = expirationDate;
}

function ShoppingBag() {
    this.listOfProducts = [];

}

Product.prototype.getInfo = function () {
    return this.name + " ->" + this.name.charAt(0) + this.name.charAt([this.name.length - 1]).toUpperCase() + this.productId + ", " + this.name + ", " + this.price;
}


Product.prototype.addProduct = function (Product) {

    var productDate = new Date();
    if (this.expirationDate > productDate) {
        return this.listOfProducts = Product();
    }

}

ShoppingBag.prototype.averagePrice = function () {

    for (var i = 0; i < this.listOfProducts.length; i++) {
        var avgPr = avgPr + parseFloat(this.listOfProducts[i].price);
    }

    return (avgPr / this.listOfProducts).toFixed(3);
}


ShoppingBag.prototype.getMostExpensive = function () {
    var max = [];
    for (var i = 0; i < this.listOfProducts.length; i++) {
        max = parseInt(Math.max(this.listOfProducts[i].price));
    }
    return max;
}

ShoppingBag.prototype.calculateTotalPrice = function () {
    var totalPrice = 0;

    for (i = 0; i < this.listOfProducts.length; i++) {
        totalPrice = totalPrice + parseInt(this.listOfProducts[i].price);
    }
    return totalPrice;
}

function PaymentCard(accountBalance, status, date) {
    this.accountBalance = parseFloat(accountBalance).toFixed(2);
    this.status = status;
    this.validUntil = new Date(date)
}


PaymentCard.prototype.checkoutAndBuy = function (ShoppingBag, PaymentCard) {
    if (this.accountBalance > this.totalPrice) {
        return "Purchase is successful"
    }
    else {
        return "Purchase unsuccessful" + (this.totalPrice - this.accountBalance) + "missing to complete purchase"
    }


}

var proizvod1 = new Product("Banana", 250, "20.11.2019")
var proizvod2 = new Product("Apples", 117.09, "23.12.2019")
var proizvod3 = new Product("Oranges", 163.29, "20.10.2019")

var kartica = new PaymentCard(2800, "active", "13.11.2019")



console.log(proizvod1.checkoutAndBuy());