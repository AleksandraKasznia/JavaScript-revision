import { capitalizeString } from "./string_function"
// import * as capitalizeStrings from "string_function" - import everything
//import default: import capitalizeString from "string_function"
const cap = capitalizeString("hello!");

//arrow functions
var magic = function() {
    return new Date();
};
//its same as
var magic1 = () => new Date();

const myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}
//is same as
const myConcat1 = (arr1, arr2) => arr1.concat(arr2);

const realNumberArray = [4, 5.6, -9.8, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
}

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

//rest operator - ...
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));

//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; //create copy of arr1
    //arr2 = arr1 - this would not create a copy but arr2 would refer to the same object as arr2
    arr1[0] = 'potato'
})();


//destructing assignment
const AVG_TEMPERATURES = {
    today: 22.5,
    tomorrow: 28
};

function getTempOfTmrw(avgTemperatures) {
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

const LOCAL_FORECAST = {
    today: { min: 22, max: 33 },
    tomorrow: { min: 16, max: 24}
};

function getMaxOfTmrw(forecast) {
    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow
}

const [z, x, , y] = [1, 2, 3, 4, 5, 6]
//z=1, x=2, y=4

let a = 8, b = 6;
(() => {
    [a, b] = [b, a]
})();
// b=8, a=6

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo(list) {
    const [ , , ...arr] = [list];
    return arr;
}

const arr = removeFirstTwo(source);

const stats = {
    max: 56.78,
    std: 4.34,
    med: 34.54,
    mod: 23.87,
    min: -0.75,
    avg: 35.85
};

const half =(function() {
    return function half({ max, min }) {
        return (max + min) / 2.0
    }
})();


//template literal
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`;

const result = {
    success: ["max-length", "no-amd", "prefer-arow-functions"],
    failure: ["no var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}


const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
//is same as
const createPerson1 = (name, age, gender) => ( { name, age, gender } );


//object can contain a function
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};


class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle("Jupiter");

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');


//getters and setters
class Book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass1() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }

        get temperature() {
            return this._temp;
        }

        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = newClass1();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

