// worker.js
var zmq = require('zeromq')
  , sock = zmq.socket('pull');

console.log(sock)
sock.connect('tcp://127.0.0.1:5555');
console.log('Worker connected to port 5555');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});