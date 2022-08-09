function reverseString(myString) {
    const lastChar = myString.length - 1;
    var newString = myString[lastChar];
    for (let i = lastChar - 1; i >= 0; i--) {
        newString = newString + myString[i];
    }
    return newString;
}

const str = 'I am a good boy'
const result = reverseString(str);

console.log(result);