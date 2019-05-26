var Rx = require('rxjs');

var cnt = 0;

var observable$ = Rx.Observable.create(
  function subscribe(observer) {
    if (cnt < 2) { observer.next(cnt); cnt++; }
    else { observer.complete(); }
  }
);

var oNext = (x) => { console.log('Got ' + x); };
var oComplete = (x) => { console.log('Completed'); };

observable$.subscribe(oNext, null, oComplete); // cnt = 0
observable$.subscribe(oNext, null, oComplete); // cnt = 1
observable$.subscribe(oNext, null, oComplete); // cnt = 2
observable$.subscribe(oNext, null, oComplete); // cnt = 3
