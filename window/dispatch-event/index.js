var log = console.log.bind(console, '[parent]');
var init = performance.now();
var channel;
var start;

addEventListener('message', onMessage);

function onMessage(e) {
  switch (e.data) {
    case 'ready':
      log('ready', performance.now() - init);
      channel = e.source;
      connect();
    break;

    case 'connected':
      channel.dispatchEvent(new MessageEvent('message', { data: 'request' }));
    break;

    case 'response':
      var now = performance.now();
      log('total', now - start);
    break;
  }
}

function connect() {
  start = performance.now();
  channel.dispatchEvent(new MessageEvent('message', { data: 'connect' }));
  block(1000);
}

function block(ms) {
  log('blocking for', ms);
  var start = Date.now();
  while (Date.now() < start + ms);
}
