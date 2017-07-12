include n.Makefile

verify:
	@echo "Verifying…"
	@find ./src ./test -type f -exec lintspaces -e .editorconfig -i js-comments {} + &&\
	eslint -c ./.eslintrc.js ./src ./test

unit-test:
	@echo "Unit Testing…"
	@mocha --require test/setup --recursive --reporter spec test

test: verify unit-test

run:
	nht run --https
