'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTTPServer;

var _http = require('http');

function getHTTPServer(props) {
  const { app, port, environment } = props;

  const server = _http.Server.listen(port, function () {
    if (environment === 'development') {
      console.log('Listening on port ' + port + '...');
    }
  });
  return server;
}