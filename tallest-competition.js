function findTheTallest(heights) {
    console.log('The array is: ', heights);
    var theTallest = heights[0];
    for (let i = 0; i < heights.length; i++) {
        const element = heights[i];
        if (element > theTallest) {
            theTallest = element;
        }
        else {
            continue;
        }

    }
    return theTallest;
}


var myNumber = [150, 120, 172, 180, 196];
var tallest = findTheTallest(myNumber);
console.log('The tallest one is ', tallest);