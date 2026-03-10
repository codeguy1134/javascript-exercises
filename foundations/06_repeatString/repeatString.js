const repeatString = function(string, a) {
  if (a < 0) {
    return 'ERROR';
  }

  let result = '';

  for (let n = 0; n < a; n++) {
    result += string;
  }

  return result;
}

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
