const myStringRaw = 'Tumi bondhu kala paki, ami jeno ki. bosonto kale tumai bolte parini'
const myString = myStringRaw.toLowerCase();
const searchString = 'Bondhu'

const doesExist = myString.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);


const firstWord = "tumi"
if (myString.startsWith(firstWord.toLowerCase())) {
    console.log("string is correct")

}
else {
    console.log("string is incorrect");
}
const lastWord = 'parIni'
if (myString.endsWith(lastWord.toLowerCase())) {
    console.log("The string is correct");
}
else {
    console.log("The string is incorrect");
}