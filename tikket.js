function tiketPrice(tiketNumber) {
    if (tiketNumber <= 100) {
        var first100 = 100 * tiketNumber;
        var totalAmount = first100;
        return totalAmount;
    }
    else if (tiketNumber > 100 && tiketNumber <= 200) {
        var first100 = 100 * 100;
        var second100 = 90 * (tiketNumber - 100);
        var totalAmount = first100 + second100;
        return totalAmount;
    }
    else {
        var first100 = 100 * 100;
        var second100 = 90 * 100;
        var theRest = 70 * (tiketNumber - 200);
        var totalAmount = first100 + second100 + theRest;
        return totalAmount;
    }
}


const totalTiketPrice = tiketPrice(250);
console.log(totalTiketPrice);