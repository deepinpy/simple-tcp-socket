const net = require('net');

const port = 80;
const host = 'example.com';
const rawHttpRequest = 'GET /HTTP/1.1\r\nHost: example.com\r\n\r\n';

const socket = new net.Socket();
socket.connect(port, host);

socket.on('connect', () => {
  console.log(`connected to ${host}:${port}`);
  console.log(`local port ${socket.localPort}\n`);

  socket.write(rawHttpRequest);
});

socket.on('data', data => {
  console.log('buffer--->', data)
  console.log('string--->', data.toString())

  socket.destroy();
});