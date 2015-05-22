var log = console.log.bind(console, '[parent]');
var channel = new BroadcastChannel('channel');
var init = performance.now();
var start;

channel.onmessage = onMessage;

function onMessage(e) {
  switch (e.data) {
    case 'connected':
      channel.postMessage('request');
    break;

    case 'response':
      var now = performance.now();
      log('TOTAL:', now - start);
    break;
  }
}

function run() {
  log('run');
  start = performance.now();
  channel.postMessage('connect');
  block(1000);
}

function block(ms) {
  log('blocking for', ms);
  var start = Date.now();
  while (Date.now() < start + ms);
}
