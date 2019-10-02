// let someVarName -> someVarName can be used only within the scope, let does not let you declare variable twice

function checkscope()  {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope is: ", i);
    }
    console.log("Function scope i is: ",i);
    return i;
}

var myAray = [["John",23], ["dog",3]];
myArray.shift(); // myArray =  ["dog", 3];
myArray.unshift(["Happy", 5]); // myArray = [["Happy", 5], ["dog", 3]]


function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

//stringify turns array to string
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//after output: [2,3,4,5,6]
// "===" opposite to '==' does notconvert types so they have to match (10 == "10") = true, (10 === "10") = false
// there is also !==

var ourDog = {
    "name": "Fluffy",
    "legs": 4,
    "tails": 1,
    "two eyes": true,
    "friends": ["everything!"]
};

ourDog.name = "Happy Fluffy";
ourDog.bark = "woof-woof";
delete ourDog.tails;

var name = ourDog.name;
var ifHasTwoEyes = ourDog["two eyes"];
var limbs = "legs";
var ourDogLimbs = ourDog[limbs];

var checkProp = "friends";
ourDog.hasOwnProperty(checkProp);

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

parseInt("56"); //change string to integer
parseInt("10001", 2) //2 - defines its a binary number

// ternary operator
var isEqual = (a === b ? 0 : 1);
var num = 5;
var moreComplicated = (num > 0 ? "positive" : num < 0 ? "negative" : "zero");

//mutate array
const s = [5, 7, 2]
//this wont work: s = [2, 5, 7];
//but this will:
s[0] = 2;
s[1] = 5;
s[2] = 7;

//preventing object from mutating
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);



