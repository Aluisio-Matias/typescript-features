const profile = {
  name: 'Alex',
  age: 20, 
  coords: {
    lat: 1000001,
    lng: 1555678
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// const age = profile.age;
//ES2015
const {age, name}: {age: number; name: string} = profile;
const {
  coords: {lat, lng}
}: {coords: {lat: number, lng: number}} = profile;

