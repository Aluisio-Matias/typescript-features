import 'reflect-metadata';

const plane = {
  color: 'blue'
};

// Reflect.defineMetadata('note', 'Hey there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

Reflect.defineMetadata('note', 'hey there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);