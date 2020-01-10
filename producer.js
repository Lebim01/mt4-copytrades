// producer.js
var zmq = require('zeromq')
  , sock = zmq.socket('push');

sock.bindSync('tcp://34.73.29.2:5555')
console.log('Producer bound to port 5555');

setInterval(function(){
  console.log('sending work');
  sock.send('some work');
}, 500);