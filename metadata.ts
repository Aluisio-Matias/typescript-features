import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'blue';

  @markFunction('Hey there!')
  fly(): void {
    console.log('swoooooosh');
  }

}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}


// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret)

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret)
  }
}

//initial code examples about metadata

// const plane = {
//   color: 'blue'
// };

// Reflect.defineMetadata('note', 'Hey there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hey there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);