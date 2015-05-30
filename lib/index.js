lib = function(options) {
  this.options = options;
};

lib.self = function() {
  return lib;
}

lib.prototype.say = function() {
  return 'Hi, I\'m '+ this.options.name;
};

exports = module.exports = lib;
