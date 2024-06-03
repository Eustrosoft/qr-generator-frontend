const { start } = require('live-server');

const params = {
  port: 3000,
  host: 'localhost',
  open: false,
  file: 'index.html',
  logLevel: 2,
  proxy: [['/api', '']],
};

start(params);
