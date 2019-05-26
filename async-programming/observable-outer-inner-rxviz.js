const { Observable, interval } = Rx;
const { take, map } = RxOperators;

interval(900).pipe(
  take(3),
  map(x => interval(500).pipe(
       take(5),
       map(y => 'C'+y+x)
       )
  )
);
