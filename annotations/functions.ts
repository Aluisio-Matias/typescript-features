const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function devide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//never will not return anything, not going to execute the function and will throw an error
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysForecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date, forecast.weather);
};

logWeather(todaysForecast);

//ES2015 destructuring
const logWeather2 = ({date, weather}: {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather)
};

