@classDecorator
class Boat {
  @testDecorator
  color: string = 'blue';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Something bad happened.')
  pilot(
    @parameterDecorator speed: string, 
    @parameterDecorator generateWake: boolean
    ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing to log');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: any, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}



