# Mock server

A web-server that logs requests and returns a configurable mocked response.

![screenshot](screenshot.png)


## Usage instructions

1. Rename `config-sample.json` to `config.json`
1. Run with `npm start`

This will launch a web server that listens for requests, logging the header, body, and query params, then responding with a fixed response, as configured in `config.json`.

Changes to files, including the response configuration, automatically reload the server.


## Contributing

I will likely not be accepting pull requests. Without automated tests, I would need to manually check that changes don't break things, and I don't have the time for that. Feel free to fork this project instead.
