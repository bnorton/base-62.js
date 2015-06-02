all: build minify headerify

build:
	@browserify lib/index.js --standalone base-62 > index.js

minify:
	@uglifyjs index.js --compress --mangle --stats --output index.min.js --source-map index.min.js.map

headerify:
	@cat ./lib/header.js
	@cat ./lib/header.js > tmp.js && cat index.js >> tmp.js && mv tmp.js index.js
	@cat ./lib/header.js > tmp.js && cat index.min.js >> tmp.js && mv tmp.js index.min.js

clean:
	@rm index.js index.min.js index.min.js.map

test:
	if [ -e ./node_modules/.bin/minijasminenode2 ]; then ./node_modules/.bin/minijasminenode2 --verbose --forceexit **/*_spec.js; else printf "\nMini Jasmine not installed @ ./node_modules/.bin/minijasminenode2...\n\nTrying npm install\n\n" && npm install; fi;
