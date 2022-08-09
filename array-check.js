function arrayCheck(numbers) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        if (number >= 0) {
            newArray.push(number);
        }
        else {
            break;
        }
    }
    return newArray;
}

const myArr = [23, 63, -63, 23, 16, 47, 23, -43, -32, -48];
const positiveArr = arrayCheck(myArr);

console.log(positiveArr);
