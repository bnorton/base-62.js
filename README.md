# lib.js

A base configuration and starter project for a simple JavaScript library / Component

<!-- Remove after renaming {{name}} to the real project name and adding the {{circle-ci-username}}
[![Circle CI](https://circleci.com/gh/{{circle-ci-username}}/{{name}}.js.svg?style=svg)](https://circleci.com/gh/{{circle-ci-username}}/{{name}}.js)
-->

##Getting Started

####Clone this repository into a new directory
```javascript
git clone git@github.com:bnorton/lib.js.git {{name}}.js
```

####Search the whole project for `{{name}}`
Rename everything you find

####Add and Install dependencies
Add any libraries / dependencies that you know of then
```bash
$ npm install -g browserify
$ npm install -g uglify
$ npm install
```

####Add tests
```bash
$ make test
```

####Add implementations
```bash
$ make test
```

####Build you first browserified / minified versions and publish
```bash
$ make
$ git commit -am "[Release] Version x.y.z"
$ git tag -a 0.9.0 -m "[Release] Version x.y.z" -m "Other words of wisdom and what has changed"
$ npm publish
```

#### Add this project to CircleCI
Enable the build status at the top of this doc
