const { start } = require('live-server');

const params = {
  port: 3000,
  host: 'localhost',
  open: false,
  file: 'index.html',
  logLevel: 2,
  proxy: [['/qrgen', 'https://debug.dev37.qxyz.ru']],
  
};

start(params);
