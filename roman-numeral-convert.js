function convertToRoman(num) {
  let arrRoman = [];
  let objRoman = {
    ones: ["I", "V", "X"],
    tens: ["X", "L", "C"],
    hund: ["C", "D", "M"],
    thou: ["M"]
  };

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

  let arrNum = num.toString().split('').reverse();
  arrRoman.unshift(romanize('ones', arrNum[0]));
  if (arrNum[1]) arrRoman.unshift(romanize('tens', arrNum[1]));
  if (arrNum[2]) arrRoman.unshift(romanize('hund', arrNum[2]));
  if (arrNum[3]) arrRoman.unshift(romanize('thou', arrNum[3]));
  return arrRoman.join('');
}

console.log(convertToRoman(95));
