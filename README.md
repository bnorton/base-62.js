# lib.js

A base configuration and starter project for a simple JavaScript library / Component

##Getting Started

####Clone this repository
Setup a new directory and update the origin
```javascript
git clone git@github.com:bnorton/lib.js.git {{name}}.js
cd {{name}}.js
git remote set-url origin git@github.com:{{username}}/{{name}}.js.git
```

####Search the project for things to replace
1. Rename `{{name}}` to the new library name
1. Rename `{{username}}` with yours on GitHub and CircleCI respectively
1. Rename `{{full name}}` with your name and company name (if any)

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
Enable the build status at the top of the README.lib.md doc

------------------------

####Replace this document with the real deal and `#win`
```bash
$ mv README.lib.md README.md
```
