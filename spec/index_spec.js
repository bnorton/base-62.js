describe('lib', function() {
  var lib, Library = require('../lib/foo');

  beforeEach(function() {
    lib = new Library({name: 'John Doe'});
  });

  describe('.self', function() {
    it('should be iteself', function() {
      expect(Library.self()).toBe(Library);
    });

    describe('when the lib is applied', function() {
      it('should be itself' , function() {
        expect(Library.self.apply(global)).toBe(Library);
      });
    });
  });

  describe('#say', function() {
    it('should have the name', function() {
      expect(lib.say()).toBe('Hi, I\'m John Doe');
    });
  });
});
