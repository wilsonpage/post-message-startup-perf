var init = performance.now();
var channel;
var start;

addEventListener('message', onMessage);

function onMessage(e) {
  switch (e.data) {
    case 'ready':
      // console.log('ready', performance.now() - init);
      channel = e.source;
      connect();
    break;

    case 'connected':
      channel.postMessage('request', '*');
    break;

    case 'response':
      var now = performance.now();
      console.log('since init', now - init)
      console.log('since connect', now - start);
    break;
  }
}

function connect() {
  start = performance.now();
  channel.postMessage('connect', '*');
}
