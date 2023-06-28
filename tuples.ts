//This is an object example
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//now lets compare the same data using tuples
//this is what makes this a tuple
//we are being very specific on the order the values should be
const pepsi: [string, boolean, number] = ['brown', true, 40];

//type alias - create the idea of a tuple inside the code
//so instead of doing the code from above, you could do it ie. below
type Drink = [string, boolean, number];
const coke: Drink = ['black', true, 95];
const sprite: Drink = ['clear', true, 40];
const greenTea: Drink = ['light brown', false, 0];

//Here's an example of why I will not be using tuples as often
const carSpecs: [number, number] = [400, 3354];
//you can tell what these numbers mean
//so let's use an object instead
const carSpecsObj = {
  horsepower: 400,
  weight: 3354
};



