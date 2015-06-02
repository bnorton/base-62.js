# base-62.js

[![Circle CI](https://circleci.com/gh/bnorton/base-62.js.svg?style=svg)](https://circleci.com/gh/bnorton/base-62.js)
[![npm version](https://badge.fury.io/js/base-62.js.svg)](http://badge.fury.io/js/base-62.js)

#Getting started

###Install it
```bash
$ npm install base-62.js
```

###Require it
```javascript
var base62 = require('base-62.js');
```

###Use it to convert a number to a base 62 string
```javascript
base62.encode('144928238032487217698238462873470924850921348902347582734698872031234');
//=> TODO FIND ACTUAL VALUE
```

###Use it to come back
```javascript
base62.decode(TODO FIND ACTUAL VALUE);
//=> "144928238032487217698238462873470924850921348902347582734698872031234"
```

###Create a portable token from a MongoDB Object id (or any HEX string)
```javascript
base62.encodeHex('556c9e573337620003000000');
//=> VALUE

base62.decodeHex(VALUE)
//=> "556c9e573337620003000000"
```

###Create a random token (API Access or a random password)
```javascript
base62.random()
//=> ACTUAL SAMPLE VALUE
```
