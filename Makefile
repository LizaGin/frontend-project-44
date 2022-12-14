install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-calc.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-progression.js

lint:
	npx eslint .