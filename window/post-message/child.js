var log = console.log.bind(console, '[child]');

addEventListener('message', onMessage);

function onMessage(e) {
  // console.log('child', e.data);

  switch (e.data) {
    case 'connect':
      log('connect');
      window.parent.postMessage('connected', '*');
    break;
    case 'request':
      log('request');
      window.parent.postMessage('response', '*');
    break;
  }
}

window.parent.postMessage('ready', '*');