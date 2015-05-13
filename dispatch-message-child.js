addEventListener('message', onMessage);

function onMessage(e) {
  // console.log('child', e.data);

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