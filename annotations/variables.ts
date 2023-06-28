const apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
const colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1,2,3,4,5];

let truths: boolean[] = [true, false, true];

//Classes
class Car {
  accelerate() {
    return 'Vroom vroom!';
  }

  honk() {
    return 'Beep beep';
  }

  break() {
    return 'Stopped!'
  }
};

let car : Car = new Car();

car.accelerate();
car.honk();
car.break();

//Object literal
let point: {x: number; y: number; z: string} = {
  x: 10,
  y: 20,
  z: 'hello'
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20} < turns the json into an object

//2) When we declare a variable on one line and initialize it later
const words = ['hello', 'please', 'goodbye'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
  if (words[i] === 'please') {
    foundWord = true;
  }
};

// 3) When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
};




