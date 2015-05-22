var log = console.log.bind(console, '[child]');

addEventListener('message', onMessage);

function onMessage(e) {
  // console.log('child', e.data);

  switch (e.data) {
    case 'connect':
      log('connect');
      postMessage('connected');
    break;
    case 'request':
      log('request');
      postMessage('response');
    break;
  }
}

postMessage('ready');