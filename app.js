// the forecast today is 293 kelvin.
const kelvin = 293;

//celsius is 273 less then kelvin.
const celsius = kelvin - 273;

//converted celsius to fahrenheit
const fahrenheit = celsius * (9/5) + 32;

//fahrenheit gives decimal, so i round it down.
Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
