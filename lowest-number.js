function getLowestNumer(numbers) {
    var lowestNubmer = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element < lowestNubmer) {
            lowestNubmer = element;
        }
        else {
            continue;
        }
    }
    return lowestNubmer;
}

const myNumber = [24, 336, 75, 357, 12, 845, 35];
var result = getLowestNumer(myNumber);

console.log("The lowest number of the array is ", result);