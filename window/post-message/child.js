// parent.console.time('iframeload');
// onload = e => parent.console.timeEnd('iframeload');

addEventListener('message', e => {
  switch (e.data) {
    case 'pong':
      // parent.console.timeEnd('pong');
      parent.console.timeStamp('gotpong');
    break;
  }
});

// parent.console.time('ping');
parent.postMessage('ping', '*');
parent.console.timeStamp('ping');
