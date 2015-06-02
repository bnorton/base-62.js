require('./helpers/spec_helper.js');

describe('Base62', function() {
  var base62 = require('../lib/index');

  describe('encode', function() {
    it('converts strings', function() {
      expect(base62.encode('1')).toBe('1');
      expect(base62.encode('1133557799')).toBe('1eIiaj');
      expect(base62.encode('94218049124')).toBe('1EQhkBC');
      expect(base62.encode('9007199254740991')).toBe('FfGNdXsE7'); // Number.MAX_SAFE_INTEGER
    });

    it('converts numbers', function() {
      expect(base62.encode(1)).toBe('1');
      expect(base62.encode(1133557799)).toBe('1eIiaj');
      expect(base62.encode(94218049124)).toBe('1EQhkBC');
      expect(base62.encode(9007199254740991)).toBe('FfGNdXsE7'); // Number.MAX_SAFE_INTEGER
    });

    it('converts large number strings', function() {
      expect(base62.encode('111111111111111111111111111111111111111111111111111')).toBe('IMZ54lZi4wn72kCYWAbT9ujgLIc7');
      expect(base62.encode('9007199254740991900719925474099190071992547409919007199254740991')).toBe('gD20FOWV5oEmcD0AHPi2GiqcifETqBRdhOCr');
    });

    it('converts any toString-able value', function() {
      expect(base62.encode({toString: function() { return '4466' }})).toBe('1a2');
    });
  });

  describe('encode', function() {
    it('un-converts strings', function() {
      expect(base62.decode('1')).toBe('1');
      expect(base62.decode('1eIiaj')).toBe('1133557799');
      expect(base62.decode('1EQhkBC')).toBe('94218049124');
      expect(base62.decode('FfGNdXsE7')).toBe('9007199254740991'); // Number.MAX_SAFE_INTEGER
    });

    it('un-converts numbers', function() {
      expect(base62.decode(1)).toBe('1');
      expect(base62.decode('1eIiaj')).toBe('1133557799');
      expect(base62.decode('1EQhkBC')).toBe('94218049124');
      expect(base62.decode('FfGNdXsE7')).toBe('9007199254740991'); // Number.MAX_SAFE_INTEGER
      expect(base62.decode('FfGNdXsE8')).toBe('9007199254740992'); // Number.MAX_SAFE_INTEGER+1
    });

    it('un-converts large number strings', function() {
      expect(base62.decode('IMZ54lZi4wn72kCYWAbT9ujgLIc7')).toBe('111111111111111111111111111111111111111111111111111');
      expect(base62.decode('gD20FOWV5oEmcD0AHPi2GiqcifETqBRdhOCr')).toBe('9007199254740991900719925474099190071992547409919007199254740991');
    });

    it('un-converts any toString-able value', function() {
      expect(base62.decode({toString: function() { return '1a2' }})).toBe('4466');
    });
  });

  describe('encodeHex', function() {
    it('converts', function() {
      expect(base62.encodeHex('4a8a0d94f964a520c40920e3')).toBe('u07tx1R9V8QOdCaD');
      expect(base62.encodeHex('55bd4f700260006ffa495400')).toBe('yvCvCYLaAgBtX8mQ');
    });
  });

  describe('decodeHex', function() {
    it('un-converts', function() {
      expect(base62.decodeHex('u07tx1R9V8QOdCaD')).toBe('4a8a0d94f964a520c40920e3');
      expect(base62.decodeHex('yvCvCYLaAgBtX8mQ')).toBe('55bd4f700260006ffa495400');
    });
  });

  describe('token', function() {
    var token1, token2, token3;

    beforeEach(function() {
      token1 = base62.token();
      token2 = base62.token();
      token3 = base62.token();
    });

    it('should work', function() {
      expect(token1).not.toMatch(/null|undefined/);
      expect(token2).not.toMatch(/null|undefined/);
      expect(token3).not.toMatch(/null|undefined/);
    });

    it('should generate a token', function() {
      expect(token1).toMatch(/^[0-9a-zA-Z]{26,30}$/);
      expect(token2).toMatch(/^[0-9a-zA-Z]{26,30}$/);
      expect(token3).toMatch(/^[0-9a-zA-Z]{26,30}$/);
    });

    it('should be unique tokens', function() {
      expect(token1).not.toEqual(token2);
      expect(token1).not.toEqual(token3);
      expect(token2).not.toEqual(token3);
    });
  });
});
