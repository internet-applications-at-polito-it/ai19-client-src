var Rx = require('rxjs');

var observable = Rx.Observable.create(function (observer) {
  let cnt = 0;
  const id = setInterval(() => {
    let rnd = (Math.random() * 10).toFixed(0);
    if (cnt < 5 && rnd < 8) {
      observer.next({ cnt: cnt, val: rnd }); cnt += 1;
    } else {
      clearInterval(id);
      if (cnt == 5) { observer.complete('Done'); }
      else { observer.error({ cnt: cnt, val: rnd }); }
    }
  }, 500);
});

var observer = {
  next: x => console.log('Got a next value: ' + JSON.stringify(x)),
  error: err => console.error('Got an error: ' + JSON.stringify(err)),
  complete: () => console.log('Got a complete notification'),
};

observable.subscribe(observer);



