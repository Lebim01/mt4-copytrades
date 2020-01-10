// worker.js
var zmq = require('zeromq')
  , sock = zmq.socket('pull');

sock.connect('tcp://34.73.29.2:5555');
console.log('Worker connected to port 5555');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});