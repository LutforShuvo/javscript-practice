
const num1 = 24;
const num2 = 23;
const num3 = 22;


if (num1 === num2 && num2 === num3) {
    console.log("All numbers are equal");
}
else if (num1 === num2 || num2 === num3 || num1 === num3) {
    if (num1 > num2) {
        console.log(num1, " is the max");
    }
    else if (num2 > num3) {
        console.log(num2, " is the max");
    }
    else {
        console.log(num3, " is the max");
    }
}
else {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1, " is the max");
        }
        else {
            console.log(num3, " is the max");

        }
    }
    else if (num2 > num3) {
        console.log(num2, " is the max");
    }
    else {
        console.log(num3, " is the max");

    }
}

