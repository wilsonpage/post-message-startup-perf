var log = console.log.bind(console, '[parent]');
var worker = new Worker('child.js');
var init = performance.now();
var channel;
var start;

worker.onmessage = onMessage;

function onMessage(e) {
  switch (e.data) {
    case 'ready':
      connect();
    break;

    case 'connected':
      worker.postMessage('request');
    break;

    case 'response':
      var now = performance.now();
      log('total', now - start);
    break;
  }
}

function connect() {
  log('connect');
  start = performance.now();
  worker.postMessage('connect');
  block(1000);
}

function block(ms) {
  log('blocking for', ms);
  var start = Date.now();
  while (Date.now() < start + ms);
}

function microtask(fn) {
  Promise.resolve().then(fn);
}

function macrotask(fn) {
  setTimeout(fn);
}
