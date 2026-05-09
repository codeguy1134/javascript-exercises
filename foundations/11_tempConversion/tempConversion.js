const convertToCelsius = function(tempF) {
  let celsius = Number(((tempF - 32) * 5/9).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(tempC) {
  let fahrenheit = Number(((tempC * 9/5) + 32).toFixed(1));
  return fahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
