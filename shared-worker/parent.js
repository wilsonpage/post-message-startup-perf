var log = console.log.bind(console, '[parent]');
var select = document.querySelector('select');
var worker = new SharedWorker('child.js');
var init = performance.now();
var channel;
var start;

worker.port.start();
worker.port.onmessage = onMessage;

function onMessage(e) {
  switch (e.data) {
    case 'connected':
      worker.port.postMessage('request');
    break;

    case 'pong':
      var now = performance.now();
      log('TOTAL:', now - start);
    break;
  }
}

function run() {
  log('connect');
  var blockType = select.options[select.selectedIndex].value;
  start = performance.now();
  worker.port.postMessage('connect');
  task[blockType](function() { block(1000); });
}

function block(ms) {
  log('blocking for', ms);
  var start = Date.now();
  while (Date.now() < start + ms);
}

var task = {
  sync: function(fn) { fn(); },
  microtask: function(fn) { Promise.resolve().then(fn); },
  macrotask: function(fn) { setTimeout(fn); }
};
