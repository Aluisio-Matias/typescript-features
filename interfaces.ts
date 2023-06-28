interface Vehicle {
  name: string;
  year: number;
  manufactured: Date;
  broken: boolean;
  summary(): string; // summary is function
};

interface Report {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  manufactured: new Date(),
  broken: true,
  summary(): string {
    return `Vehicle name: ${this.name}, year: ${this.year}, broken: ${this.broken}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printVehicle(oldCivic);

const printSummary = (item: Report): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
