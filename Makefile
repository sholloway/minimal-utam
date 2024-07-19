.PHONY: test 

# Configuration Setting
BIN = ./node_modules/.bin
WDIO_CONFIG = ./wdio.config.js


# Run all tests.
test:
	@( \
		echo "Run the automations."; \
		$(BIN)/wdio run ${WDIO_CONFIG}; \
	)