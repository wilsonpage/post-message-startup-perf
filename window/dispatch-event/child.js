var log = console.log.bind(console, '[child]');

addEventListener('message', onMessage);

function onMessage(e) {
  switch (e.data) {
    case 'connect':
      window.parent.dispatchEvent(new MessageEvent('message', { data: 'connected' }));
    break;
    case 'request':
      window.parent.dispatchEvent(new MessageEvent('message', { data: 'response' }));
    break;
  }
}

var message = new MessageEvent('message', { data: 'ready', source: window });
window.parent.dispatchEvent(message);