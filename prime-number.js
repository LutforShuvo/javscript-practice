function isPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;


    }
    else {
        return false;
    }
}

var myNum = 15;
var result = isPrime(myNum);
if (result === true) {
    console.log(myNum, ' is a Prime number');
}
else {

    console.log(myNum, ' is Not a Prime number');
}

