/* globals module */

"use strict";

function solve() {
    class Product {
        constructor(productType, name, price) {
            this._productType = productType;
            this._name = name;
            this._price = price;
        }
        get productType() {
            return this._productType;
        }
        set productType(value) {
            if (!typeof(value) === 'string') {
                throw "Product type must be a string";
            }
            this._productType = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            if (!typeof(value) === 'string') {
                throw "Name must be a string";
            }
            this._name = value;
        }
        get price() {
            return this._price;
        }
        set price(value) {
            if (isNaN(value) && value > 0) {
                throw "Price must be a number";
            }
            this._price = value;
        }
    }

    class ShoppingCart {
        constructor() {
            this.products = [];
        }
        add(product) {
            this.products.push(product);
            return this;
        }
        remove(product) {
            let itemToRemove = null;
            console.log(product);
            if (this.products.length < 1) {
                throw "Shopping Cart is not containig any products";
            }
            for (let i = 0; i < this.products.length; i += 1) {
                if ((this.products[i]._name === product.name) && (this.products[i]._productType === product.productType) && (this.products[i]._price === product.price)) {
                    itemToRemove = i;
                    break;
                }
            }
            if (itemToRemove === null) {
                throw "Shopping Cart is not contained the product";
            }
            this.products.splice(itemToRemove, 1);
        }
        showCost() {
            let costs = 0;

            for (let i = 0; i < this.products.length; i += 1) {
                costs += this.products[i]._price;
            }
            return costs;
        }
        showProductTypes() {
            let productTypes = new Set();
            for (let i = 0; i < this.products.length; i += 1) {
                productTypes.add(this.products[i]._productType);
            }
            return Array.from(productTypes).sort();
        }
        getInfo() {
            let obj = {};
            let info = {};
            let totalPrice = 0;
            let products = [];
            let sortedProducts = this.products;

            function compare(a, b) {
                if (a._name < b._name)
                    return -1;
                if (a._name > b._name)
                    return 1;
                return 0;
            }
            sortedProducts.sort(compare);
            var count = {};
            for (let i = 0; i < sortedProducts.length; i += 1) {
                if (count[sortedProducts[i]._name]) {
                    count[sortedProducts[i]._name]++;
                } else {
                    count[sortedProducts[i]._name] = 1;
                }

            }

            function search(key) {
                var obj = sortedProducts.find(function(obj) {
                    return obj.name === key;
                });
                return obj._price;
            }
            for (var key in count) {
                if (count.hasOwnProperty(key)) {
                    let quantity = 0;
                    obj.name = key;
                    quantity = count[key];
                    obj.totalcost = (search(key) * quantity);
                    obj.quantity = count[key];
                    products.push(obj);
                    obj = {};
                }
            }

            for (let total of products) {
                totalPrice += total.totalcost;
            }
            info.totalPrice = totalPrice;
            info.products = products;
            return info;
        }
    }
    return {
        Product,
        ShoppingCart
    };
}

module.exports = solve;
let { Product, ShoppingCart } = solve();

let cart = new ShoppingCart();

let pr1 = new Product("Sweets", "Shokolad Milka", 2);
cart.add(pr1);
console.log(cart.showCost());
//prints `2`

let pr2 = new Product("Groceries", "Salad", 0.5);
cart.add(pr2);
cart.add(pr2);
console.log(cart.showCost());
//prints `3`

console.log(cart.showProductTypes());
//prints ["Sweets", "Groceries"]

console.log(cart.getInfo());
/* prints
{
    totalPrice: 3
    products: [{
        name: "Salad",
        totalPrice: 1,
        quantity: 2
    }, {
       name: "Shokolad Milka",
       totalPrice: 2,
       quantity: 1 
    }]
}
*/

//cart.remove({ name: "Salad", productType: "Groceries", price: 0.5 });
//throws: "salad" is not equal to "Salad"

cart.remove({ name: "Salad", productType: "Groceries", price: 0.5 });
console.log(cart.getInfo());
/* prints
{
    totalPrice: 2.5
    products: [{
        name: "Salad",
        totalPrice: 0.5,
        quantity: 1
    }, {
       name: "Shokolad Milka",
       totalPrice: 2,
       quantity: 1 
    }]
}*/