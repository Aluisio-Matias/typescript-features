class Vehicle {
  //specifing a property (or a field) inside of a class in the line below
  // color: string;

  //constructor function will executed when you create a new instance of this class
  // constructor(color: string) {
  //   this.color = color;
  // }

  //instead of writing all those lines above, you can use shortcut below
  constructor(public color: string) {}

  public drive(): void {
    console.log('Zoom zoom zoom');
  }

  protected honk(): void {
    console.log('Beep beep');
  }
};

const vehicle = new Vehicle('blue');
vehicle.drive();
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    //super() is a reference to the constructor method in the parent class
    super(color);
  }

  //to overwrite a method from the extending class, you can simply redefine the method
  public drive(): void { 
    console.log('VROOOOOOOOM');
  }

  private accelerate(): void {
    console.log('GOOOOOOOOOOO!')
  }

  startDriving(): void {
    this.drive();
    this.honk();
    this.accelerate();
  }
}

const car = new Car(18, 'purple');
car.drive(); //will log vrooooooom because drive was overwritten inside Car's class
car.startDriving();


