var channel = new BroadcastChannel('channel');

channel.onmessage = onMessage;

function onMessage(e) {
  // console.log('child', e.data);

  switch (e.data) {
    case 'connect':
      channel.postMessage('connected');
    break;
    case 'request':
      channel.postMessage('response');
    break;
  }
}

channel.postMessage('ready');
