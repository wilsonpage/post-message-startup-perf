var channel = new BroadcastChannel('channel');
var init = performance.now();
var start;

channel.onmessage = onMessage;

function onMessage(e) {
  switch (e.data) {
    case 'ready':
      connect();
    break;

    case 'connected':
      channel.postMessage('request');
    break;

    case 'response':
      var now = performance.now();
      console.log('since init', now - init);
      console.log('since connect', now - start);
    break;
  }
}

function connect() {
  start = performance.now();
  channel.postMessage('connect');
}
