var log = console.log.bind(console, '[child]');
var channel = new BroadcastChannel('channel');

channel.onmessage = onMessage;

function onMessage(e) {
  switch (e.data) {
    case 'connect':
      log('connect');
      channel.postMessage('connected');
    break;
    case 'request':
      log('request');
      channel.postMessage('response');
    break;
  }
}

channel.postMessage('ready');
