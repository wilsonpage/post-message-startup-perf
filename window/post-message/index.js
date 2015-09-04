// parent.console.time('parentload');
// onload = e => parent.console.timeEnd('parentload');


addEventListener('message', e => {
  switch (e.data) {
    case 'ping':
      console.timeStamp('gotping');
      // console.timeEnd('ping');
      // console.time('pong');
      console.timeStamp('pong');
      e.source.postMessage('pong', '*');
    break;
  }
});
