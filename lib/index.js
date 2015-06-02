var Big = require('big.js'),
  generate = require('seedrandom')(),
  characterSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

Base62 = {
  encode: function(integer) { var original = integer;
    integer = integer.toString();

    try {
      Big(integer)
    } catch(e) {
      console.warn('Big init error on ', original, integer);
    }

    var bigInt = Big(integer), result = '';
    if (integer == '0') { return '0'; }

    while (bigInt.gt(0)) {
      result = characterSet[bigInt.mod(62).toFixed()] + result;
      bigInt = Big(bigInt.div(62).toFixed(2).split('.')[0]); // Math.floor() aka round down
    }

    return result;
  },
  decode: function(base62String) {
    base62String = base62String.toString();

    var result = Big(0), big62 = Big(62),
      characters = base62String.split('').reverse();

    characters.forEach(function(character, index) {
      result = result.plus(big62.pow(index).times(characterSet.indexOf(character)));
    });

    return result.toFixed();
  },
  encodeHex: function(hexString) {
    return Base62.encode(hexToInt(hexString.toString()))
  },
  decodeHex: function(base62String) {
    return intToHex(Base62.decode(base62String));
  },
  token: function() {
    return random()+random()+random();
  }
};

function random() {
  var number = generate().toString().replace(/^0\./, '');

  return Base62.encode(number);
}

function intToHex(decStr) {
  var hex = convertBase(decStr, 10, 16);
  return hex ? hex : null;
}

function hexToInt(hexStr) {
  return convertBase(hexStr.toString().toLowerCase(), 16, 10);
}

// START These methods are provided thanks to http://www.danvk.org/hex2dec.html
//
function add(x, y, base) {
  var z = [];
  var n = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < n || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
}

function multiplyByNumber(num, x, base) {
  if (num < 0) return null;
  if (num == 0) return [];

  var result = [];
  var power = x;
  while (true) {
    if (num & 1) {
      result = add(result, power, base);
    }
    num = num >> 1;
    if (num === 0) break;
    power = add(power, power, base);
  }

  return result;
}

function parseToDigitsArray(str, base) {
  var digits = str.split('');
  var ary = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    var n = parseInt(digits[i], base);
    if (isNaN(n)) return null;
    ary.push(n);
  }
  return ary;
}

function convertBase(str, fromBase, toBase) {
  var digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;

  var outArray = [];
  var power = [1];
  for (var i = 0; i < digits.length; i++) {
    if (digits[i]) {
      outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase);
    }
    power = multiplyByNumber(fromBase, power, toBase);
  }

  var out = '';
  for (var i = outArray.length - 1; i >= 0; i--) {
    out += outArray[i].toString(toBase);
  }
  return out;
}
//
// END These methods are provided thanks to http://www.danvk.org/hex2dec.html

exports = module.exports = Base62;
