function getSumOfOdd(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element % 2 !== 0) {

            sum += numbers[i];
            console.log(element, sum);
        }
        else {
            continue;
        }
    }
    return sum;
}


myArr = [25, 23, 33, 22, 66, 66, 46, 23, 64, 73, 46];
console.log(getSumOfOdd(myArr));