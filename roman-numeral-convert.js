// Roman numberal converter
function convertToRoman(num) {
  let arrRoman = [];

  // create object with arrays for Roman numeral characters
  // that can go in each decimal place
  let objRoman = {
    ones: ["I", "V", "X"],
    tens: ["X", "L", "C"],
    hund: ["C", "D", "M"],
    thou: ["M"]
  };

  // function to break decimal number apart and replace with string of
  // Roman numeral characters
  function romanize(place, digit) {
    let temp = '';
    switch (digit) {
      case '0':
        return temp;
        break;
      case '1':
      case '2':
      case '3':
        for (let i=1;i<=digit;i++) {
          temp += objRoman[place][0]
        };
        return temp;
        break;
      case '4':
        temp = objRoman[place][0] + objRoman[place][1];
        return temp;
        break;
      case '5':
        temp = objRoman[place][1];
        return temp;
        break;
      case '6':
      case '7':
      case '8':
        temp = objRoman[place][1];
        for (let i=6;i<=digit;i++) {
          temp += objRoman[place][0];
        };
        return temp;
        break;
      case '9':
        temp = objRoman[place][0] + objRoman[place][2];
        return temp;
        break;
    };
  }

  // convert input number to array in reverse order
  let arrNum = num.toString().split('').reverse();

  // use previously defined object to map digits to Roman numerals
  // and add to beginning of new array to get back to correct decimal order
  arrRoman.unshift(romanize('ones', arrNum[0]));
  if (arrNum[1]) arrRoman.unshift(romanize('tens', arrNum[1]));
  if (arrNum[2]) arrRoman.unshift(romanize('hund', arrNum[2]));
  if (arrNum[3]) arrRoman.unshift(romanize('thou', arrNum[3]));

  // join back into string and return result 
  return arrRoman.join('');
}

console.log(convertToRoman(95));
