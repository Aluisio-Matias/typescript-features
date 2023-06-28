const carMakers: string[] = ['Ford', 'Toyota', 'Chevy', 'Honda', 'Ferrari'];

const dates = [new Date(), new Date()];

//2D array example
const carsByMake: string[][] = [
  ['Ford GT'],
  ['Supra'],
  ['Corvett'],
  ['NSX'],
  ['488 Pista']
];

// Help with inference when extracting values
const americanCar = carMakers[0];
const myCar = carsByMake[4];


// Prevent incompatible values
carMakers.push(100); // carMakers only allows string so it will throw an error

//When you declare an array in TS we get all the help from the built in JS functions
//ie: 'map', 'forEach', 'reduce', 
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types - arrays can still contain multiple different types
//You must use type annotation when you have different types of value in an array
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-09-02');
importantDates.push(new Date());
// importantDates.push(100); //error because number is not allowed

