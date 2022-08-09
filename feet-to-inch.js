function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const myFeet = 23;
const getInch = feetToInch(myFeet);
console.log(getInch)