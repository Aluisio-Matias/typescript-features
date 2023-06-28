class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
};

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
};

//generic class///////////////////////
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
};

//generics example if you want to pass in an array of strings
new ArrayOfAnything<string>(['a', 'b', 'c', 'd']);

//generics example if you want to pass in an array of strings
new ArrayOfAnything<number>([1, 2, 3, 4, 5]);

/************************************************************ */
//Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

//this is the generic function ////////////////
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnything<string>(['a', 'b', 'c', 'd']);
printAnything<number>([1, 2, 3, 4, 5]);


////////// Generic Contraints //////////////

class Car {
  print() {
    console.log('I am a Car');
  }
};

class House {
  print() {
    console.log('I am a House');
  }
};

//constraint is a promisse to typescript that we'll have a method available.
//example

interface Printable {
  print(): void;
};

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
};

printHousesOrCars<House>([new House, new House]);
printHousesOrCars<Car>([new Car, new Car]);


