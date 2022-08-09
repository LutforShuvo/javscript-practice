const shoppingCart = [
    { name: 'Shoes', price: 2999 },
    { name: 'Shirt', price: 2300 },
    { name: 'Pants', price: 2329 },
    { name: 'Belt', price: 849 },
];

function totalCost(products) {

    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        sum += product.price;
    }

    return sum;

}


const yourTotalCost = totalCost(shoppingCart);

console.log(yourTotalCost);