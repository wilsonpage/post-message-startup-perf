addEventListener('message', onMessage);

function onMessage(e) {
  // console.log('child', e.data);

  switch (e.data) {
    case 'connect':
      window.parent.postMessage('connected', '*');
    break;
    case 'request':
      window.parent.postMessage('response', '*');
    break;
  }
}

window.parent.postMessage('ready', '*');