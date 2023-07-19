class Boat {
  @testDecorator
  color: string = 'blue';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Ooops, boat has sunk in the ocean.')
  pilot(): void {
    throw new Error();
    console.log('swish')
  }
}

function testDecorator(target: any, key: string) {
  console.log(target.color);
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



