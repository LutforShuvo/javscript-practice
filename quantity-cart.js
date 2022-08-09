const shoppingCart = [
    { name: 'Shoes', price: 2999, quantity: 5 },
    { name: 'Shirt', price: 2300, quantity: 3 },
    { name: 'Pants', price: 2329, quantity: 2 },
    { name: 'Belt', price: 849, quantity: 6 },
];

function totalCost(products) {

    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productQuantity = product.price * product.quantity;
        sum += productQuantity
    }

    return sum;

}


const yourTotalCost = totalCost(shoppingCart);

console.log(yourTotalCost);