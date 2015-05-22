var log = console.log.bind(console, '[child]');
var port;

addEventListener('connect', function(e) {
  port = e.ports[0];
  port.onmessage = onMessage;
  port.start();
  port.postMessage('ready');
});

function onMessage(e) {
  switch (e.data) {
    case 'connect':
      log('connect');
      port.postMessage('connected');
    break;
    case 'ping':
      log('ping');
      port.postMessage('pong');
    break;
  }
}
