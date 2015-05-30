all: build minify headerify

build:
	@browserify lib/index.js --standalone {{name}} > {{name}}.js

minify:
	@uglifyjs {{name}}.js --compress --mangle --stats --output {{name}}.min.js --source-map {{name}}.min.js.map

headerify:
	@cat ./lib/header.js
	@cat ./lib/header.js > tmp.js && cat {{name}}.js >> tmp.js && mv tmp.js {{name}}.js
	@cat ./lib/header.js > tmp.js && cat {{name}}.min.js >> tmp.js && mv tmp.js {{name}}.min.js

clean:
	@rm {{name}}.js {{name}}.min.js {{name}}.min.js.map

test:
	([ -e ./node_modules/.bin/minijasminenode2 ] && ./node_modules/.bin/minijasminenode2 --verbose --forceexit **/*_spec.js) || (printf "\nMini Jasmine not installed @ ./node_modules/.bin/minijasminenode2...\n\nTrying npm install\n\n" && npm install)
